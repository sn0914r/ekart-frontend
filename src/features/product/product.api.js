import apiClient from "../../lib/apiClient";

/**
 * @desc gets only active products
 * @access public
 *
 * @returns {Promise<object[]>}
 */
const getAll = () => apiClient("/products", {}, false);

/**
 * @desc gets all products
 * @access private
 *
 * @returns {Promise<object[]>}
 */
const getAllAdmin = () => apiClient("/admin/products");

/**
 * @desc posts a new product
 *
 * Preconditions:
 *  - "data" and "file" keys must exist
 *  - "data" contains valid name, price, stock, and isActive
 *
 * @param {FormData} formData
 * @access private
 *
 * @returns {Promise<object>}
 */
const post = (formData) =>
  apiClient("/admin/products", {
    method: "POST",
    body: formData,
  });

/**
 * @desc updates a product
 * @access private
 *
 * Preconditions:
 *  - "data" and "file" keys must exist
 *
 * @param {string} id
 * @param {FormData} formData
 * @returns {Promise<object>}
 */
const patch = (id, payload) =>
  apiClient(`/admin/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

const queryProducts = (options = {}, endPoint = "/products") => {
  const url = `${endPoint}?${new URLSearchParams(options).toString()}`;
  console.log("final Url", url)
  return apiClient(url, {}, false);
};

export default {
  getAll,
  getAllAdmin,
  post,
  patch,
  queryProducts,
};
