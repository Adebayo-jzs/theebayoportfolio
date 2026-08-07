"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MarkdownIt from "markdown-it";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUp02Icon,
  LeftToRightListBulletIcon,
  Cancel01Icon,
  Home01Icon,
  Folder01Icon,
  Mail01Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import { motion, AnimatePresence } from "framer-motion";

const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true,
  typographer: true,
});

// Configure markdown-it to open links in a new tab safely
const defaultRender =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  tokens[idx].attrSet("target", "_blank");
  tokens[idx].attrSet("rel", "noopener noreferrer");
  return defaultRender(tokens, idx, options, env, self);
};

export default function AskAboutBayo() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (chatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [chatOpen]);

  const handleSend = async () => {
    const question = input.trim();
    if (!question || isLoading) return;

    // Add user message
    const userMessage = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.answer },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              data.error ||
              "Something went wrong. Please try again.",
            isError: true,
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Couldn't connect to the server. Please check if the backend is running.",
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "What projects has Bayo built?",
    "What tech stack does Bayo use?",
    "How can I contact Bayo?",
  ];

  const navMenuItems = [
    {
      name: "Home",
      description: "Back to main overview",
      href: "/",
      icon: Home01Icon,
    },
    {
      name: "Projects",
      description: "View all built projects",
      href: "/projects",
      icon: Folder01Icon,
    },
    {
      name: "Contact",
      description: "Get in touch directly",
      href: "/#contact",
      icon: Mail01Icon,
    },
  ];

  return (
    <main className="min-h-dvh bg-background flex items-center justify-center relative">
      {/* Navigation Menu Button */}
      <button
        id="nav-menu-btn"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Navigation menu"
        aria-expanded={menuOpen}
        className="fixed top-6 right-6 md:top-8 md:right-8 z-50 w-11 h-11 bg-card/90 hover:bg-accent text-foreground border border-border/60 hover:border-border rounded-full shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <AnimatePresence mode="wait" initial={false}>
          {menuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <HugeiconsIcon icon={Cancel01Icon} size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <HugeiconsIcon icon={LeftToRightListBulletIcon} size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Navigation Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
            />

            {/* Menu Popover */}
            <motion.nav
              aria-label="Quick navigation"
              initial={{ opacity: 0, scale: 0.92, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -10 }}
              transition={{ type: "spring", duration: 0.25, bounce: 0 }}
              className="fixed top-20 right-6 md:top-22 md:right-8 z-50 w-72 bg-card/95 backdrop-blur-xl border border-border/70 rounded-2xl shadow-2xl p-2.5 space-y-1.5"
            >
              <div className="px-3 pt-2 pb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Navigation
                </span>
              </div>
              <div className="space-y-1">
                {navMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 hover:bg-accent/80 active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-muted/60 text-muted-foreground group-hover:bg-foreground group-hover:text-background flex items-center justify-center transition-colors duration-200">
                        <HugeiconsIcon icon={item.icon} size={18} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-foreground leading-tight">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <HugeiconsIcon
                      icon={ArrowRight02Icon}
                      size={16}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
      <div className="w-full max-w-md flex flex-col min-h-dvh relative">
        {/* Welcome screen */}
        <AnimatePresence mode="wait">
          {!chatOpen && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex-1 flex flex-col justify-center items-center text-center px-6"
            >
              {/* Avatar with glow */}
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl scale-150" />
                <Image
                  src="/avatar.jpg"
                  width={96}
                  height={96}
                  alt="Adebayo's avatar"
                  className="rounded-full relative z-10 ring-2 ring-foreground/10"
                />
                {/* Online dot */}
                <span className="absolute bottom-1 right-1 z-20 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-background" />
              </div>

              <h1 className="font-semibold text-xl text-foreground mb-2">
                Ask about Bayo
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-8">
                Interact with Adebayo&apos;s portfolio without scrolling through
                pages. Simply ask anything.
              </p>

              <button
                id="start-chat-btn"
                onClick={() => setChatOpen(true)}
                className="group relative overflow-hidden border border-foreground/20 bg-foreground text-background px-8 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-foreground/5 active:scale-[0.98] rounded-lg"
              >
                <span className="relative z-10">Start chat</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat screen */}
        <AnimatePresence mode="wait">
          {chatOpen && (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col min-h-dvh"
            >
              {/* Header — minimal: title + subtitle + refresh icon */}
              <div className="sticky top-0 z-30 bg-background px-5 pt-5 pb-3 border-b border-border/40">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-semibold text-foreground leading-tight">
                    Ask about Bayo
                  </h2>
                  <button
                    id="reset-chat-btn"
                    onClick={() => {
                      setMessages([]);
                      setInput("");
                    }}
                    className="hidden mt-0.5 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200"
                    aria-label="Reset chat"
                  >
                    {/* Refresh / reset icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.5 2v6h-6" />
                      <path d="M2.5 22v-6h6" />
                      <path d="M2.5 11.5a10 10 0 0 1 18.18-4.23L21.5 8" />
                      <path d="M21.5 12.5a10 10 0 0 1-18.18 4.23L2.5 16" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Messages area */}
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6 hide-scrollbar pb-28">
                {/* Initial greeting + suggested questions */}
                {messages.length === 0 && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-5"
                  >
                    <p className="text-sm text-foreground leading-relaxed">
                      Hey! 👋 I&apos;m Bayo&apos;s AI assistant. Ask me anything about his projects, skills, experience, or how to get in touch.
                    </p>
                    {/* Suggested questions */}
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((q) => (
                        <button
                          key={q}
                          onClick={() => sendQuestion(q)}
                          className="text-xs text-muted-foreground border border-border/60 rounded-full px-4 py-2 hover:bg-accent hover:text-foreground transition-colors duration-200"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Message list */}
                <AnimatePresence initial={false}>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChatBubble
                        role={msg.role}
                        content={msg.content}
                        isError={msg.isError}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <TypingIndicator />
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input area — + button, input, circular send */}
              <div className="fixed bottom-0 left-0 right-0 z-30">
                <div className="max-w-md mx-auto px-4 pb-5 pt-3 bg-gradient-to-t from-background from-70% to-transparent">
                  <div className="flex items-end gap-3">
                    {/* Plus / attachment button */}
                    <button
                      id="attachment-btn"
                      className="shrink-0 w-9 h-9 rounded-full border border-border/60 text-muted-foreground flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors duration-200 mb-0.5"
                      aria-label="Attach"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>

                    {/* Text input */}
                    <div className="flex-1 bg-card border border-border/60 rounded-2xl px-4 py-2.5 shadow-sm">
                      <textarea
                        ref={inputRef}
                        id="chat-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask anything about Bayo..."
                        rows={1}
                        className="w-full resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none max-h-28 leading-relaxed"
                        style={{
                          height: "auto",
                          overflowY:
                            input.split("\n").length > 3 ? "auto" : "hidden",
                        }}
                        onInput={(e) => {
                          e.target.style.height = "auto";
                          e.target.style.height =
                            Math.min(e.target.scrollHeight, 112) + "px";
                        }}
                      />
                    </div>

                    {/* Circular send button */}
                    <button
                      id="send-btn"
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="shrink-0 w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center transition-all duration-200 hover:opacity-80 disabled:opacity-20 disabled:cursor-not-allowed active:scale-90 mb-0.5"
                    >
                      <HugeiconsIcon icon={ArrowUp02Icon} size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );

  /** Helper: send a question (used by suggestions + main input) */
  function sendQuestion(q) {
    if (isLoading) return;
    const userMsg = { role: "user", content: q };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.answer || "Sorry, I couldn't process that.",
          },
        ]);
      })
      .catch(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Couldn't reach the server. Try again.",
            isError: true,
          },
        ]);
      })
      .finally(() => setIsLoading(false));
  }
}

/**
 * Chat bubble component — matches reference layout:
 *   User: right-aligned, muted background bubble, rounded
 *   Assistant: left-aligned, no background, plain text
 */
function ChatBubble({ role, content, isError }) {
  const isUser = role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-secondary text-secondary-foreground rounded-3xl rounded-br-lg px-4 py-3 text-sm leading-relaxed">
          <p className="whitespace-pre-wrap break-words">{content}</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-start">
        <div className="max-w-[90%] text-sm leading-relaxed text-red-400 bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-3">
          <p className="whitespace-pre-wrap break-words">{content}</p>
        </div>
      </div>
    );
  }

  const renderedHtml = md.render(content || "");

  return (
    <div className="flex justify-start">
      <div
        className="max-w-[92%] text-sm leading-relaxed text-foreground chat-markdown
          [&_p]:leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0
          [&_strong]:font-bold [&_strong]:text-foreground
          [&_em]:italic [&_em]:text-foreground/90
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:my-2.5
          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_ol]:my-2.5
          [&_li]:leading-relaxed
          [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:opacity-80
          [&_code]:bg-muted [&_code]:text-foreground [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono
          [&_pre]:bg-muted/80 [&_pre]:p-3 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:my-2.5"
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    </div>
  );
}

/**
 * Typing indicator (three bouncing dots) — no avatar, plain style
 */
function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1.5 py-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}