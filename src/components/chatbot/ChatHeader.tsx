import React from "react";

interface ChatHeaderProps {
    onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
    return (
        <div className="chat-header">
            <div className="chat-header-left">
                <h3>Ask Ravi</h3>
                <span>AI Portfolio Assistant</span>
            </div>

            <div className="chat-header-right">
                <div className="chat-status">
                    <span className="status-dot" />
                    <span>Online</span>
                </div>

                <button
                    type="button"
                    className="chat-close-btn"
                    onClick={onClose}
                    aria-label="Close Ask Ravi"
                    title="Close"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default ChatHeader;