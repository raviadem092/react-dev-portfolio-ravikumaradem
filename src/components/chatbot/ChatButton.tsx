import React from "react";

interface ChatButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({
    isOpen,
    onClick,
}) => {
    return (
        <button
            type="button"
            className="chatbot-button"
            onClick={onClick}
            aria-label={isOpen ? "Close Ask Ravi" : "Open Ask Ravi"}
            title={isOpen ? "Close Ask Ravi" : "Ask Ravi"}
        >
            {isOpen ? "✕" : "💬"}
        </button>
    );
};

export default ChatButton;