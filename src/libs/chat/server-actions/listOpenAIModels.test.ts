import {listOpenAIModels} from "@libs/chat/server-actions/listOpenAIModels";

describe('listOpenAIModels', () => {
  it('should return a URL when provided with a message', async () => {
    await listOpenAIModels();
  });
});
