import React from "react";
import { ChatMessage } from "./chat.types";

interface MessageBubbleProps {
    message: ChatMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
    const isUser = message.sender === "user";

    return (
        <div
            className={`message-row ${
                isUser ? "user-message" : "assistant-message"
            }`}
        >
            <div
                className={`message-bubble ${
                    isUser ? "user-bubble" : "assistant-bubble"
                }`}
            >
                {message.content}
            </div>
        </div>
    );
};

export default MessageBubble;