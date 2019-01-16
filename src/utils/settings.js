function requireEnvVar(varName, defaultValue) {
  const result = process.env[varName] || defaultValue;
  if (result === undefined) {
    throw new Error(`Environment variable ${varName} not defined\n${JSON.stringify(process.env, null, '')}`);
  }
  return result;
}

const settings = {
  get apiKey() {
    return requireEnvVar('REACT_APP_JSONBIN_API_KEY');
  },

  get apiBaseUrl() {
    return requireEnvVar('REACT_APP_JSONBIN_API_URI');
  },

  get todoApiUrl() {
    const url = requireEnvVar('REACT_APP_JSONBIN_API_URI');
    const id = requireEnvVar('REACT_APP_JSONBIN_BIN_ID');
    return `${url}${id}`;
  },

  get requestTimeout() {
    return requireEnvVar('REACT_APP_REQUEST_TIMEOUT_MS', 500);
  },
};

export default settings;
