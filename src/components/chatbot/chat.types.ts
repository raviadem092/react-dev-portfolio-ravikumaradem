export type Sender = "user" | "assistant";

export interface ChatMessage {
    id: string;
    sender: Sender;
    content: string;
    createdAt: string;
    isStreaming?: boolean;
}

export interface ChatRequest {
    message: string;
}

export interface ChatResponse {
    success: boolean;
    answer: string;
}

export interface SuggestedQuestionsResponse {
    success: boolean;
    data: string[];
}

export interface ChatHistory {
    role: "user" | "assistant";
    content: string;
}

export interface ChatRequest {
    message: string;
    history: ChatHistory[];
}