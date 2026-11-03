import React from "react";

interface SuggestedQuestionsProps {
    questions: string[];
    onQuestionClick: (question: string) => void;
}

const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({
    questions,
    onQuestionClick,
}) => {
    const prompts = questions.length ? questions : ["What does Ravi specialize in?", "Tell me about his professional experience.", "What projects has he worked on?", "Which technologies does he use?", "Tell me about his software architecture experience.", "How can I contact Ravi?"];

    return (
        <div className="suggested-questions">
            <div className="welcome-copy"><h2>Hi! I'm Ravi's AI Assistant.</h2><p>Explore Ravi's professional journey, technical expertise, projects and engineering experience. Ask me anything!</p></div>
            <p className="suggested-title">Explore:</p>

            <div className="suggested-list">
                {prompts.map((question) => (
                    <button
                        key={question}
                        type="button"
                        className="suggestion-chip"
                        onClick={() => onQuestionClick(question)}
                    >
                        {question}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SuggestedQuestions;
