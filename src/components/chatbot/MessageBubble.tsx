import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
                    isUser
                        ? "user-bubble"
                        : "assistant-bubble"
                }`}
            >
                {isUser ? (
                    <p>{message.content}</p>
                ) : (
                    <>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                a: ({ children, ...props }) => (
                                    <a
                                        {...props}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {children}
                                    </a>
                                ),
                            }}
                        >
                            {message.content}
                        </ReactMarkdown>

                        {message.isStreaming && (
                            <span className="ai-cursor" />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default MessageBubble;