import React from "react";

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
}) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className="chat-window">

            <ChatHeader onClose={onClose} />

            <div className="chat-body">

                <ChatMessages
                    messages={messages}
                />

                {loading && (
                    <TypingIndicator />
                )}

                {messages.length === 1 && (
                    <SuggestedQuestions
                        questions={questions}
                        onQuestionClick={onQuestionClick}
                    />
                )}

            </div>

            <ChatInput
                value={input}
                loading={loading}
                onChange={onInputChange}
                onSend={onSend}
            />

        </div>
    );
};

export default ChatWindow;