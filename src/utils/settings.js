function requireEnvVar(varName, defaultValue) {
  const result = process.env[varName] || defaultValue;
  if (result === undefined) {
    throw new Error(`Environment variable ${varName} not defined\n${JSON.stringify(process.env, null, '')}`);
  }
  return result;
}

const settings = {
  get apiKey() {
    return requireEnvVar('SERVER_APP_JSONBIN_API_KEY', null);
  },

  get todoApiUrl() {
    const url = requireEnvVar('SERVER_APP_JSONBIN_API_URI');
    const id = requireEnvVar('SERVER_APP_JSONBIN_BIN_ID');
    return `${url}${id}`;
  },

  get serverRequestTimeout() {
    return requireEnvVar('SERVER_APP_REQUEST_TIMEOUT_MS', 500);
  },

  get clientApiBaseUrl() {
    return requireEnvVar('REACT_APP_API_BASE_URL');
  },

  get clientRequestTimeout() {
    return requireEnvVar('REACT_APP_REQUEST_TIMEOUT_MS', 500);
  },

  get locale() {
    if (typeof window !== 'undefined' && window.navigator) {
      return window.navigator.language;
    }
    return requireEnvVar('REACT_APP_DEFAULT_LOCALE');
  },
};

export default settings;
