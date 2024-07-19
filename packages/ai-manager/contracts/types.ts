interface PromptChatContract {
  replyPrompt: (prompt: string) => Promise<string>;
  replyPromptInThread: (prompt: string) => Promise<string>;
}

interface ImageGenerationContract {
  generateImage: (prompt: string) => Promise<string | Blob>;
}
