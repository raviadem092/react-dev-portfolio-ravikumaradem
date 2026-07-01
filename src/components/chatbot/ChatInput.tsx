import React from "react";

interface ChatInputProps {
    value: string;
    loading: boolean;
    onChange: (value: string) => void;
    onSend: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
    value,
    loading,
    onChange,
    onSend,
}) => {

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {

        if (event.key === "Enter") {
            event.preventDefault();
            onSend();
        }

    };

    return (
        <div className="chat-input-container">

            <input
                type="text"
                className="chat-input"
                placeholder="Ask Ravi anything..."
                value={value}
                disabled={loading}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button
                type="button"
                className="send-button"
                disabled={loading || !value.trim()}
                onClick={onSend}
            >
                ➤
            </button>

        </div>
    );
};

export default ChatInput;