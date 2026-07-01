import React, { useEffect, useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import ChatService from "./chat.service";

import { ChatMessage } from "./chat.types";

import "../../assets/styles/ChatBot.scss";

const INITIAL_MESSAGES: ChatMessage[] = [
    {
        id: "welcome",
        sender: "assistant",
        content:
            "👋 Hi! I'm Ravi's Assit. Ask me anything about Ravi's experience, projects, skills, or professional background.",
        createdAt: new Date().toISOString(),
    },
];

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const [input, setInput] = useState("");

    const [questions, setQuestions] = useState<string[]>([]);

    const [messages, setMessages] =
        useState<ChatMessage[]>(INITIAL_MESSAGES);

    const toggleChat = () => {
        setIsOpen((prev) => !prev);
    };

    /**
     * Load suggested questions
     */
    useEffect(() => {
        const loadQuestions = async () => {
            try {
                const response =
                    await ChatService.getSuggestedQuestions();

                if (response.success) {
                    setQuestions(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        loadQuestions();
    }, []);

    /**
     * Send message to backend
     */
    const sendMessage = async (text?: string) => {

        const question = (text ?? input).trim();

        if (!question || loading) {
            return;
        }

        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            sender: "user",
            content: question,
            createdAt: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, userMessage]);

        setInput("");

        setLoading(true);

        try {

            const response =
                await ChatService.sendMessage(question);

            if (response.success) {

                const assistantMessage: ChatMessage = {
                    id: crypto.randomUUID(),
                    sender: "assistant",
                    content: response.answer,
                    createdAt: new Date().toISOString(),
                };

                setMessages((prev) => [
                    ...prev,
                    assistantMessage,
                ]);
            }

        } catch (error) {

            const errorMessage: ChatMessage = {
                id: crypto.randomUUID(),
                sender: "assistant",
                content: "Sorry, something went wrong. Please try again.",
                createdAt: new Date().toISOString(),
            };

            setMessages((prev) => [
                ...prev,
                errorMessage,
            ]);
            console.error(error);

        } finally {

            setLoading(false);

        }
    };

    /**
     * Suggested question clicked
     */
    const handleQuestionClick = (question: string) => {
        sendMessage(question);
    };

    return (
        <>
            <ChatButton
                isOpen={isOpen}
                onClick={toggleChat}
            />

            <ChatWindow
                isOpen={isOpen}
                onClose={toggleChat}
                messages={messages}
                questions={questions}
                input={input}
                loading={loading}
                onInputChange={setInput}
                onSend={() => sendMessage()}
                onQuestionClick={handleQuestionClick}
            />
        </>
    );
};

export default ChatBot;