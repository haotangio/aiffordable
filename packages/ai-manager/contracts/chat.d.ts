interface ChatService {
  replyPrompt: (prompt: string) => Promise<string>;
  replyPromptInThread: (prompt: string) => Promise<string>;
}
