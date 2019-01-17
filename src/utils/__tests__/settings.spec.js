import settings from '../settings';

jest.mock('process');

describe('settings', () => {
  beforeEach(() => {
    process.env = {
      SERVER_APP_PORT: 3008,
      SERVER_APP_JSONBIN_API_KEY: 'mock',
      SERVER_APP_JSONBIN_API_URI: 'mock',
      SERVER_APP_JSONBIN_BIN_ID: 'mock',
      SERVER_APP_REQUEST_TIMEOUT_MS: 'mock',

      REACT_APP_REQUEST_TIMEOUT_MS: 750,
      REACT_APP_API_BASE_URL: 'mock',
    };
  });

  it('should return a default value', () => {
    delete process.env.REACT_APP_REQUEST_TIMEOUT_MS;
    expect(settings.clientRequestTimeout).toBe(500);
  });


  it('should get the api url', () => {
    const url = process.env.SERVER_APP_JSONBIN_API_URI;
    const id = process.env.SERVER_APP_JSONBIN_BIN_ID;

    expect(settings.todoApiUrl).toBe(`${url}${id}`);
  });

  it('should get the api key', () => {
    expect(settings.apiKey).toBe(process.env.SERVER_APP_JSONBIN_API_KEY);
  });

  it('should get the client request timeout', () => {
    expect(settings.clientRequestTimeout).toBe(process.env.REACT_APP_REQUEST_TIMEOUT_MS);
  });
});
