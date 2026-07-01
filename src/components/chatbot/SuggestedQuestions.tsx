import React from "react";

interface SuggestedQuestionsProps {
    questions: string[];
    onQuestionClick: (question: string) => void;
}

const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({
    questions,
    onQuestionClick,
}) => {
    if (questions.length === 0) {
        return null;
    }

    return (
        <div className="suggested-questions">
            <p className="suggested-title">
                Try asking:
            </p>

            <div className="suggested-list">
                {questions.map((question) => (
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