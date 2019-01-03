const settings = {
  get apiKey() {
    const {
      REACT_APP_JSONBIN_API_KEY,
    } = process.env;

    return REACT_APP_JSONBIN_API_KEY;
  },

  get apiUrl() {
    const {
      REACT_APP_JSONBIN_API_URI,
      REACT_APP_JSONBIN_BIN_ID,
    } = process.env;

    return `${REACT_APP_JSONBIN_API_URI}${REACT_APP_JSONBIN_BIN_ID}`;
  },
};

export default settings;
