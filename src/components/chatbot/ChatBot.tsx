import React, { useEffect, useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import ChatService from "./chat.service";

import { ChatHistory, ChatMessage } from "./chat.types";

import "../../assets/styles/ChatBot.scss";
import { streamText } from "./utils/streamText";

const MAX_HISTORY_MESSAGES = 6;
const STREAM_SPEED = 12;

const INITIAL_MESSAGES: ChatMessage[] = [
    {
        id: "welcome",
        sender: "assistant",
        content:
            "👋 Welcome! I'm Ask Ravi, your AI assistant. Ask me anything about Ravi's experience, projects, skills, or professional background.",
        createdAt: new Date().toISOString(),
    },
];

const buildConversationHistory = (
    currentMessages: ChatMessage[]
): ChatHistory[] => {

    return currentMessages
        .filter(
            (message) =>
                message.id !== "welcome" &&
                message.content.trim().length > 0
        )
        .slice(-MAX_HISTORY_MESSAGES)
        .map((message) => ({
            role:
                message.sender === "assistant"
                    ? "assistant"
                    : "user",
            content: message.content,
        }));
};

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
     * Load Suggested Questions
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

                console.error(
                    "Failed to load suggested questions:",
                    error
                );

            }

        };

        loadQuestions();

    }, []);

    /**
     * Append assistant error message
     */
    const appendErrorMessage = (message: string) => {

        setMessages((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                sender: "assistant",
                content: message,
                createdAt: new Date().toISOString(),
            },
        ]);

    };

    /**
     * Send Message
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

        const history = buildConversationHistory([
            ...messages,
            userMessage,
        ]);

        setInput("");

        setMessages((prev) => [
            ...prev,
            userMessage,
        ]);

        setLoading(true);

        try {

            const response =
                await ChatService.sendMessage(
                    question,
                    history
                );

            if (!response.success) {

                appendErrorMessage(
                    "Sorry, I couldn't process your request."
                );

                return;

            }

            const assistantId = crypto.randomUUID();

            setMessages((prev) => [
                ...prev,
                {
                    id: assistantId,
                    sender: "assistant",
                    content: "",
                    createdAt: new Date().toISOString(),
                },
            ]);

            await streamText(
                response.answer,
                (partialText) => {

                    setMessages((prev) =>
                        prev.map((message) =>
                            message.id === assistantId
                                ? {
                                      ...message,
                                      content: partialText,
                                  }
                                : message
                        )
                    );

                },
                STREAM_SPEED
            );

        } catch (error) {

            console.error(
                "Failed to send message:",
                error
            );

            let errorMessage =
                "Sorry, something went wrong. Please try again.";

            if (error instanceof Error) {
                errorMessage = error.message;
            }

            appendErrorMessage(errorMessage);

        } finally {

            setLoading(false);

        }

    };

    /**
     * Suggested Question Click
     */
    const handleQuestionClick = (
        question: string
    ) => {

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