import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ErrorOutline, Close } from "@mui/icons-material";

export default function SubscribeToNewsLetter() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("idle"); // idle, success, error
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");
        setMessage("");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus("success");
                setMessage(data.message);
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.message || "Something went wrong.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Failed to connect. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    // Auto-dismiss popup after 5 seconds
    useEffect(() => {
        if (status === "success" || status === "error") {
            const timer = setTimeout(() => {
                setStatus("idle");
                setMessage("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <div className="relative">
            <h1 className="font-outfit leading-[0.9] mb-10">
                <span className="text-[15vw] md:text-[13vw] font-black tracking-tighter text-white">stay synced</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="max-w-3xl flex mx-auto border-b-2 border-white">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email Address"
                        className="bg-transparent border-none focus:ring-0 outline-none flex-grow md:text-xl placeholder:text-white/20 uppercase tracking-widest px-3 py-2 text-white"
                        disabled={isSubmitting}
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="tracking-widest uppercase bg-white text-black py-2 px-3 font-semibold hover:bg-transparent hover:text-white border-2 border-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "..." : "Submit"}
                    </button>
                </div>
            </form>

            <AnimatePresence>
                {(status === "success" || status === "error") && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`fixed bottom-8 right-8 z-50 flex items-start gap-4 p-6 rounded-lg shadow-2xl backdrop-blur-md border border-white/10 max-w-sm w-full
                            ${status === "success" ? "bg-green-900/90 text-white" : "bg-red-900/90 text-white"}`}
                    >
                        <div className="flex-shrink-0 mt-1">
                            {status === "success" ? (
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            ) : (
                                <ErrorOutline className="w-6 h-6 text-red-400" />
                            )}
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-bold text-lg uppercase tracking-wider mb-1">
                                {status === "success" ? "Success" : "Error"}
                            </h3>
                            <p className="text-sm font-medium opacity-90 leading-relaxed">
                                {message}
                            </p>
                        </div>
                        <button 
                            onClick={() => setStatus("idle")}
                            className="flex-shrink-0 hover:bg-white/10 rounded-full p-1 transition-colors"
                        >
                            <Close className="w-5 h-5 opacity-70" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
