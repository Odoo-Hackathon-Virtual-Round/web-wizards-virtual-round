import { API_BASE_URL } from "../config/api";

export const productService = {
  async getProducts() {
    const response = await fetch(`${API_BASE_URL}/products`);
    return response.json();
  },

  async getProductById(id) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return response.json();
  },

  async createProduct(productData) {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(productData),
    });
    return response.json();
  },

  // Add other product-related API calls as needed
};
