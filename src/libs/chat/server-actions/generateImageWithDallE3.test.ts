// Import statements
import { generateImageWithDallE3 } from './generateImageWithDallE3';

// Mock the OpenAI library
// jest.mock('openai', () => {
//   return {
//     OpenAI: jest.fn().mockImplementation(() => {
//       return {
//         images: {
//           generate: jest.fn().mockResolvedValue({
//             data: [{ url: 'https://example.com/dalle-generated-image.png' }],
//           }),
//         },
//       };
//     }),
//   };
// });

describe('generateImageWithDallE3', () => {
  it('should return a URL when provided with a message', async () => {
    const message = 'Logo for an AI company';
    const url = await generateImageWithDallE3({ message });
    expect(!!url).toBe(true);
  });
});