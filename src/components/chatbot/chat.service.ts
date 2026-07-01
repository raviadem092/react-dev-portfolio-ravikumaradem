import {
    ChatResponse,
    SuggestedQuestionsResponse
} from "./chat.types";
const API_BASE_URL = process.env.REACT_APP_ASK_RAVI_CHAT_BOT_API_BASE_URL;
const ENDPOINTS = {
    CHAT: "/api/chat",
    QUESTIONS: "/api/questions",
    HEALTH: "/api/health",
};

class ChatService {
    private async request<T>(
        endpoint: string,
        options: RequestInit
    ): Promise<T> {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        });
        if (!response.ok) {
            const error = await response.json().catch(() => null);

            throw new Error(
                error?.message ||
                "Something went wrong. Please try again."
            );
        }

        return response.json();
    }
    async sendMessage(message: string): Promise<ChatResponse> {
        return this.request<ChatResponse>(
            ENDPOINTS.CHAT,
            {
                method: "POST",
                body: JSON.stringify({ message }),
            }
        );
    }

    async getSuggestedQuestions(): Promise<SuggestedQuestionsResponse> {
        return this.request<SuggestedQuestionsResponse>(
            ENDPOINTS.QUESTIONS,
            {
                method: "GET",
            }
        );
    }

    async healthCheck() {
        return this.request(
            ENDPOINTS.HEALTH,
            {
                method: "GET",
            }
        );
    }
}

const chatService = new ChatService();

export default chatService;