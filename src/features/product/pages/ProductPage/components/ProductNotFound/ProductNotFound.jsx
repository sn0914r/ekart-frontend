import NotFound from "../../../../../../app/pages/NotFound/NotFoundPage";

const ProductNotFound = () => (
  <NotFound 
    errorCode="404"
    title="Product Not Found."
    message="The item you are looking for does not exist or has been removed."
  />
);

export default ProductNotFound;
