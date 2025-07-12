import { API_BASE_URL } from "../config/api";

export const authService = {
  async login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email, // Backend expects username
          password: password,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Invalid credentials");
      }

      const data = await response.json();
      localStorage.setItem("token", data.jwtToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      return data;
    } catch (error) {
      throw new Error(error.message || "Login failed");
    }
  },

  async register(name, email, password, role = "USER") {
    try {
      const response = await fetch(`${API_BASE_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email, // Backend expects username
          name: name,
          email: email,
          password: password,
          role: role,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        if (errorText === "USERNAME_EXIST") {
          throw new Error("Email already exists");
        }
        throw new Error(errorText || "Registration failed");
      }

      // Don't parse JSON for registration as it returns plain text
      return await response.text();
    } catch (error) {
      throw new Error(error.message || "Registration failed");
    }
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  },

  getToken() {
    return localStorage.getItem("token");
  },
};
