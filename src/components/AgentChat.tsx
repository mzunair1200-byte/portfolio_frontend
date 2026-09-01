"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageSquare, X, Bot, Terminal } from "lucide-react";

export default function AgentChat() {
    const [isOpen, setIsOpen] = useState(false);
    // Tracks whether the user has ever opened the chat — used to turn off
    // the red "unread" dot permanently instead of pulsing forever.
    const [hasOpened, setHasOpened] = useState(false);
    const [messages, setMessages] = useState([
        { role: "agent", content: "z-agent summoned. I am the virtual agent for Muhammad Zunair. How can I assist you with the architecture today?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
        setHasOpened(true);
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://portfoliobackend-production-0d7c.up.railway.app";
            const response = await fetch(`${apiBaseUrl}/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || "Connection Failed");
            }

            setMessages((prev) => [...prev, { role: "agent", content: data.response }]);
        } catch (error: any) {
            setMessages((prev) => [...prev, { role: "agent", content: `ERR_CONNECTION_REFUSED: ${error.message}` }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        // bottom-4/left-4 on mobile keeps it fully clear of the screen edges;
        // sm: steps back out to the original bottom-8/left-8 spacing on larger screens.
        <div className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-[101]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, x: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, x: -20 }}
                        // w-[calc(100vw-2rem)] = full screen width minus the 1rem margin on each
                        // side, so it can never overflow past the viewport on any phone size.
                        // max-w-[350px] keeps it at your original fixed size once there's room.
                        // max-h-[75vh] instead of a fixed 500px means it shrinks gracefully
                        // if a mobile keyboard eats vertical space.
                        className="mb-4 w-[calc(100vw-2rem)] max-w-[350px] h-[500px] max-h-[75vh] bg-[#DEDBD2] border border-black/20 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden"
                    >
                        {/* Header: Forest Green to match Portfolio */}
                        <div className="p-5 bg-[#2D4F3E] text-[#DEDBD2] flex justify-between items-center relative overflow-hidden shrink-0">
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="p-2 bg-white/10 rounded-lg">
                                    <Terminal size={14} className="text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">Z-Agent</span>
                                    <span className="text-[8px] font-mono opacity-60">System Online</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:rotate-90 transition-transform duration-300"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Body: Mono font with Beige/Charcoal theme */}
                        <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 font-mono text-[11px] leading-relaxed">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-4 rounded-2xl ${m.role === 'user'
                                        ? 'bg-[#1A1A1A] text-white rounded-br-none shadow-lg'
                                        : 'bg-white/40 text-[#1A1A1A] border border-black/5 rounded-bl-none italic'
                                        }`}>
                                        <span className="block opacity-40 text-[9px] uppercase font-black mb-1">
                                            {m.role === 'user' ? 'You' : 'Agent'}
                                        </span>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-1 items-center text-[#2D4F3E] font-black italic">
                                    <span className="animate-pulse">Thinking...</span>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-5 bg-[#DEDBD2] border-t border-black/10 shrink-0">
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask a question about Zunair"
                                    className="w-full bg-white border border-black/10 rounded-xl py-3 pl-5 pr-12 text-[11px] font-mono text-[#1A1A1A] placeholder-black/30 focus:outline-none focus:border-[#2D4F3E] transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-3 top-2.5 p-1.5 text-[#2D4F3E] hover:scale-110 transition-transform"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Main Trigger Button */}
            <button
                onClick={handleOpen}
                className="w-16 h-16 bg-[#2D4F3E] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 relative group border-4 border-[#DEDBD2]"
            >
                <MessageSquare className="group-hover:hidden" />
                <Bot className="hidden group-hover:block" />
                {/* Only shows before the visitor has ever opened the chat — a real
                    "you haven't seen this yet" signal instead of a permanent pulse. */}
                {!hasOpened && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#DEDBD2] animate-pulse" />
                )}
            </button>
        </div>
    );
}