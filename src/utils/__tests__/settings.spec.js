import settings from '../settings';

jest.mock('process');

describe('settings', () => {
  beforeEach(() => {
    process.env = {
      REACT_APP_JSONBIN_API_KEY: 'mock',
      REACT_APP_JSONBIN_API_URI: 'mock',
      REACT_APP_JSONBIN_BIN_ID: 'mock',
      REACT_APP_REQUEST_TIMEOUT_MS: 800,
    };
  });

  it('should return a default value if that is set', () => {
    delete process.env.REACT_APP_REQUEST_TIMEOUT_MS;
    expect(settings.requestTimeout).toBe(500);
  });


  it('should get the api url', () => {
    const url = process.env.REACT_APP_JSONBIN_API_URI;
    const id = process.env.REACT_APP_JSONBIN_BIN_ID;

    expect(settings.apiUrl).toBe(`${url}${id}`);
  });

  it('should get the api key', () => {
    expect(settings.apiKey).toBe(process.env.REACT_APP_JSONBIN_API_KEY);
  });

  it('should get the request timeout', () => {
    expect(settings.requestTimeout).toBe(process.env.REACT_APP_REQUEST_TIMEOUT_MS);
  });
});
