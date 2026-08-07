"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp02Icon } from "@hugeicons/core-free-icons";

export default function AskAboutBayo() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
    <div className="bg-background flex flex-col max-w-sm justify-center">
      {!chatOpen && (
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
          <Image src={"/avatar.jpg"} width={90} height={90} alt="Avatar image"  className="rounded-full "/>
          <h2 className="font-semibold text-primary my-5 w-full">
            Interact with Adebayo's portfolio without having to scroll through pages. Simply ask.
          </h2>
          <button 
            onClick={() => setChatOpen(true)}
            className="w-fit border-2 border-foreground bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:bg-transparent hover:text-foreground"
          >
            Start chat
          </button>
        </div>
      )}  

      {chatOpen && 
        <div>
            <InputSection/>
        </div>
      }
    </div>
    </main>
  );
}

function InputSection() {
    return (
        <div className="flex gap-3 fixed bottom-0 left-0 right-0 pb-3 px-4">
            <input type="text" name="query" className="rounded-lg border border-white/30 w-full outline-none" />
            <button className="w-fit rounded-full p-2 bg-green-800 text-white"> <HugeiconsIcon icon={ArrowUp02Icon}/> </button>
        </div>
    );
}