import {listOpenAIModels} from "@libs/chat/actions/listOpenAIModels";

describe('listOpenAIModels', () => {
  it('should return a URL when provided with a message', async () => {
    await listOpenAIModels();
  });
});
