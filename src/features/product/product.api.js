import apiClient from "../../lib/apiClient";

/**
 * @desc gets only active products
 * @access public
 *
 * @returns {Promise<object[]>}
 */
const getAll = () => apiClient("/products", {}, false);

const queryProducts = (options = {}, endPoint = "/products") => {
  const url = `${endPoint}?${new URLSearchParams(options).toString()}`;
  console.log("final Url", url)
  return apiClient(url, {}, false);
};

export default {
  getAll,
  queryProducts,
};
