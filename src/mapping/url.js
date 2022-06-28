const env = import.meta.env;
const baseUrl = env.MODE === "development" ? env.VITE_APP_API_URL : "";

export default baseUrl;