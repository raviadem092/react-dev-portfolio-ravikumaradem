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
        event: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {

        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            onSend();
        }

    };

    return (
        <div className="chat-input-container">

            <textarea
                className="chat-input"
                placeholder="Ask Ravi anything..."
                value={value}
                disabled={loading}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
            />

            <button
                type="button"
                className="send-button"
                disabled={!loading && !value.trim()}
                onClick={onSend}
            >
                {loading ? "■" : "➤"}
            </button>

        </div>
    );
};

export default ChatInput;
