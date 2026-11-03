import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { ChatMessage } from "./chat.types";
import ChatIcon from "./ChatIcon";

interface MessageBubbleProps {
    message: ChatMessage;
    onCopy?: (content: string) => void;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, onCopy }) => {

    const isUser = message.sender === "user";
    const [copied, setCopied] = useState(false);
    const copyMessage = async () => {
        try { await onCopy?.(message.content); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); }
    };

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
                                code: ({ children, className, ...props }) => <code className={className} {...props}>{children}</code>,
                            }}
                        >
                            {message.content}
                        </ReactMarkdown>

                        {message.isStreaming && (
                            <span className="inline-typing" aria-label="Generating response"><i /><i /><i /></span>
                        )}
                        {!message.isStreaming && message.content && <div className="message-actions"><button type="button" onClick={copyMessage} aria-label={copied ? "Response copied" : "Copy response"} title={copied ? "Copied" : "Copy response"}><ChatIcon name={copied ? "check" : "copy"} /></button></div>}
                    </>
                )}
            </div>
        </div>
    );
};

export default MessageBubble;
