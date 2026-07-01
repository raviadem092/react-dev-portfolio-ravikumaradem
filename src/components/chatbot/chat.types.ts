export type Sender = "user" | "assistant";

export interface ChatMessage {
    id: string;
    sender: Sender;
    content: string;
    createdAt: string;
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