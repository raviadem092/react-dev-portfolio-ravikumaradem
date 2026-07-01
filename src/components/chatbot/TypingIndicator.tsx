import React from "react";

const TypingIndicator: React.FC = () => {
    return (
        <div className="message-row assistant-message">
            <div className="message-bubble assistant-bubble typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default TypingIndicator;