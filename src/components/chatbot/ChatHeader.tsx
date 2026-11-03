import React from "react";
import ChatIcon from "./ChatIcon";

interface ChatHeaderProps {
    onClose: () => void;
    onMinimize: () => void;
    onMaximize: () => void;
    minimized: boolean;
    maximized: boolean;
    onClear: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose, onClear, onMinimize, onMaximize, minimized, maximized }) => {
    return (
        <div className="chat-header">
            <div className="chat-header-left">
                <h3>Ravi's AI Assistant</h3>
                <span>Ready to help</span>
            </div>

            <div className="chat-header-right">
                <div className="chat-status">
                    <span className="status-dot" />
                    <span>Online</span>
                </div>
                <button type="button" className="chat-close-btn" onClick={onClear} aria-label="Start new conversation" title="Start new conversation"><ChatIcon name="spark" /></button>
                <button type="button" className="chat-close-btn" onClick={onMinimize} aria-label={minimized ? "Expand chat" : "Minimize chat"} title={minimized ? "Expand" : "Minimize"}><ChatIcon name={minimized ? "maximize" : "minimize"} /></button>
                <button type="button" className="chat-close-btn" onClick={onMaximize} aria-label={maximized ? "Restore chat" : "Maximize chat"} title={maximized ? "Restore" : "Maximize"}><ChatIcon name={maximized ? "restore" : "maximize"} /></button>

                <button
                    type="button"
                    className="chat-close-btn"
                    onClick={onClose}
                    aria-label="Close Ask Ravi"
                    title="Close"
                >
                    <ChatIcon name="close" />
                </button>
            </div>
        </div>
    );
};

export default ChatHeader;
