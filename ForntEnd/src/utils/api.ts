import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});

// 🔥 RESPONSE INTERCEPTOR
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // if 401 and not already retried
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                console.log("🔄 Trying refresh token...");

                // 🔥 CALL REFRESH API
                await axios.post(
                    "http://localhost:5000/api/auth/refresh",
                    {},
                    { withCredentials: true }
                );

                console.log("✅ Token refreshed");
                console.log("🔄 Interceptor triggered", error.response?.status);

                // 🔥 RETRY ORIGINAL REQUEST
                return api(originalRequest);

            } catch (refreshError) {
                console.log("❌ Refresh failed → redirecting to login");

                window.location.href = "/auth/signin";
            }
        }

        return Promise.reject(error);
    }
);

export default api;