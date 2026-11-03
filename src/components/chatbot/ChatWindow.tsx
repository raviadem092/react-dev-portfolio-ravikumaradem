import React, { useEffect, useState } from "react";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import SuggestedQuestions from "./SuggestedQuestions";
import TypingIndicator from "./TypingIndicator";
import ChatInput from "./ChatInput";

import { ChatMessage } from "./chat.types";

interface ChatWindowProps {
    isOpen: boolean;
    onClose: () => void;

    messages: ChatMessage[];

    questions: string[];

    input: string;

    loading: boolean;

    onInputChange: (value: string) => void;

    onSend: () => void;

    onQuestionClick: (question: string) => void;
    onStop: () => void;
    onCopy: (content: string) => void;
    onClear: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
    isOpen,
    onClose,
    messages,
    questions,
    input,
    loading,
    onInputChange,
    onSend,
    onQuestionClick,
    onStop,
    onCopy,
    onClear,
}) => {

    const isStreaming = messages.some((message) => message.isStreaming);
    const [minimized, setMinimized] = useState(false);
    const [maximized, setMaximized] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="chat-window" style={{ height: minimized ? "auto" : maximized ? "calc(100dvh - 32px)" : undefined, top: maximized ? 16 : undefined, bottom: maximized ? 16 : undefined, right: maximized ? 16 : undefined, width: maximized ? "calc(100vw - 32px)" : undefined, resize: maximized ? "none" : "both" }}>

            <ChatHeader onClose={onClose} onClear={onClear} onMinimize={() => setMinimized((value) => !value)} onMaximize={() => { setMaximized((value) => !value); setMinimized(false); }} minimized={minimized} maximized={maximized} />

            {!minimized && <div className="chat-body">

                <ChatMessages
                    messages={messages}
                    onCopy={onCopy}
                />

                {loading && !isStreaming && (
                    <TypingIndicator />
                )}

                {messages.length === 1 && (
                    <SuggestedQuestions
                        questions={questions}
                        onQuestionClick={onQuestionClick}
                    />
                )}

            </div>}

            {!minimized && <ChatInput
                value={input}
                loading={loading}
                onChange={onInputChange}
                onSend={loading ? onStop : onSend}
            />}

        </div>
    );
};

export default ChatWindow;
