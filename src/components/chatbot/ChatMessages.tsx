import React, { useEffect, useRef, useState } from "react";

import MessageBubble from "./MessageBubble";
import { ChatMessage } from "./chat.types";

interface ChatMessagesProps {
    messages: ChatMessage[];
    onCopy: (content: string) => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, onCopy }) => {

    const bottomRef = useRef<HTMLDivElement>(null);
    const messagesRef = useRef<HTMLDivElement>(null);
    const [showScrollToBottom, setShowScrollToBottom] = useState(false);

    const updateScrollIntent = () => {
        const element = messagesRef.current?.closest<HTMLElement>(".chat-body");
        if (!element) return;
        const distanceFromBottom = element.scrollHeight - element.scrollTop - element.clientHeight;
        setShowScrollToBottom(distanceFromBottom > 72);
    };

    useEffect(() => {
        updateScrollIntent();
    }, [messages]);

    useEffect(() => {
        const scrollContainer = messagesRef.current?.closest<HTMLElement>(".chat-body");
        scrollContainer?.addEventListener("scroll", updateScrollIntent);
        return () => scrollContainer?.removeEventListener("scroll", updateScrollIntent);
    }, []);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        setShowScrollToBottom(false);
    };

    return (
        <>
        <div className="chat-messages" ref={messagesRef}>
            {messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                    onCopy={onCopy}
                />
            ))}
            <div ref={bottomRef} />
        </div>
        {showScrollToBottom && <button type="button" className="scroll-to-bottom" onClick={scrollToBottom} aria-label="Scroll to latest message" title="Scroll to latest message" style={{ alignSelf: "flex-end", background: "#7c3aed", border: "1px solid rgba(255,255,255,.4)", borderRadius: "50%", color: "#fff", cursor: "pointer", fontSize: "1.15rem", height: 34, margin: "-48px 0 14px", position: "sticky", bottom: 16, width: 34, zIndex: 2 }}>
            ↓
            </button>}
        </>
    );
};

export default ChatMessages;
