import React, { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";
import { ChatMessage } from "./chat.types";

interface ChatMessagesProps {
    messages: ChatMessage[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    return (
        <div className="chat-messages">
            {messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                />
            ))}
            <div ref={bottomRef} />
        </div>
    );
};

export default ChatMessages;