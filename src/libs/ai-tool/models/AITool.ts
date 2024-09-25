export interface AITool {
  id: string,
  label: string,
  logo: string
}

export const AI_TOOLs = [
  {
    id: 'gpt-4o',
    label: 'Chat GPT-4o',
    logo: '/static/img/logos/openai-logomark.svg',
  },
  {
    id: 'gpt-3.5-turbo',
    label: 'Chat GPT-3.5',
    logo: '/static/img/logos/openai-logomark.svg',
  },
  {
    id: 'dall-e-3',
    label: 'Image Gen DALL-E-3',
    logo: '/static/img/logos/openai-logomark.svg',
  },
];
