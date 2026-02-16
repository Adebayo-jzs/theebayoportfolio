"use client"
import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Share01Icon, Tick02Icon } from "@hugeicons/core-free-icons/index";

export default function SharePost({ shareLink, title }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleShare = async () => {
        const validShareLink = shareLink.startsWith("http")
            ? shareLink
            : `https://${shareLink}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: `Check out this post: ${title}`,
                    url: validShareLink,
                });
            } catch (err) {
                console.log('Share canceled:', err);
            }
        } else {
            handleCopy();
        }
    };

    return (
        <button
            onClick={handleShare}
            className="group flex items-center gap-2 text-sm font-bold tracking-widest text-[#00e6ff]/80 hover:text-[#00e6ff] transition-colors uppercase"
            aria-label="Share this post"
        >
            <span className="relative">
                {copied ? (
                     <HugeiconsIcon icon={Tick02Icon} className="w-5 h-5" />
                ) : (
                    <HugeiconsIcon icon={Share01Icon} className="w-5 h-5" />
                )}
            </span>
            <span>{copied ? "Copied!" : "Share"}</span>
        </button>
    );
}