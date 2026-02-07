import apiClient from "../../lib/apiClient";

/* ========================================================================================
PRODUCT APIs
======================================================================================== */

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
const post = (formData) => {
  apiClient("/admin/products", {
    method: "POST",
    body: formData,
  });
};

/**
 * @desc updates a product
 * @access private
 *
 * Preconditions:
 *  - "data" and "file" keys must exist in FormData
 *
 * @param {string} id
 * @param {FormData} formData
 * @returns {Promise<object>}
 */
const patch = (id, payload) => {
  return apiClient(`/admin/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
};

/* ========================================================================================
ORDERS APIs
======================================================================================== */

/**
 * @desc gets all orders
 * @access private
 *
 * @returns {Promise<object[]>}
 */
const getOrdersAdmin = () => apiClient("/admin/orders");

/**
 * @desc updates order shipping status (admin only)
 * @access private
 *
 * @param {string} orderId
 * @param {{ shippingStatus: string }} payload
 * @returns {Promise<object>}
 */
const patchShippingStatusAdmin = (orderId, { shippingStatus }) =>
  apiClient(`/admin/orders/${orderId}`, {
    method: "PATCH",
    body: JSON.stringify({ shippingStatus }),
  });

export default {
  getAllAdmin,
  post,
  patch,
  getOrdersAdmin,
  patchShippingStatusAdmin,
};
