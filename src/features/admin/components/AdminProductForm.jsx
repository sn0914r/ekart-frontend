import { useState, useEffect } from "react";
import Button from "../../../shared/components/Button";
import AdminQuery from "../admin.query";
import {
  FormContainer,
  FormTitle,
  FormField,
  Label,
  Input,
  CheckboxWrapper,
  Checkbox,
  CheckboxLabel,
  FileInputWrapper,
  FileInputLabel,
  HiddenFileInput,
  ImagePreviewContainer,
  PreviewImage,
  ButtonGroup,
  CancelButton,
  ErrorText,
} from "./AdminProductForm.styles";

const AdminProductForm = ({ product, onClose, onSuccess }) => {
  const isEditMode = !!product;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    isActive: true,
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  // Mutations
  const createMutation = AdminQuery.usePostProductAdmin();
  const updateMutation = AdminQuery.usePatchProductAdmin();

  // Initialize form with product data in edit mode
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        stock: product.stock || "",
        isActive: product.isActive ?? true,
      });
      setImagePreview(product.imageUrl || null);
    }
  }, [product]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      if (errors.image) {
        setErrors((prev) => ({ ...prev, image: null }));
      }
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    }

    if (!formData.price || formData.price <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (formData.stock === "" || formData.stock < 0) {
      newErrors.stock = "Stock must be 0 or greater";
    }

    if (!isEditMode && !imageFile) {
      newErrors.image = "Product image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const productData = {
      name: formData.name.trim(),
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock, 10),
      isActive: formData.isActive,
    };

    if (isEditMode) {
      updateMutation.mutate({ id: product._id, data: productData });
      onSuccess();
    } else {
      const formDataToSend = new FormData();

      if (imageFile) {
        formDataToSend.append("file", imageFile);
      }
      formDataToSend.append("data", JSON.stringify(productData));

      createMutation.mutate(formDataToSend);

      onSuccess();
    }
  };

  const isLoading = createMutation.isPending || updateMutation.isPending;

  return (
    <FormContainer>
      <FormTitle>{isEditMode ? "Edit Product" : "Add New Product"}</FormTitle>

      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <FormField>
          <Label htmlFor="name">Product Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            hasError={!!errors.name}
            disabled={isLoading}
          />
          {errors.name && <ErrorText>{errors.name}</ErrorText>}
        </FormField>

        {/* Price */}
        <FormField>
          <Label htmlFor="price">Price (₹) *</Label>
          <Input
            id="price"
            name="price"
            type="number"
            step="0.01"
            min="0"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            hasError={!!errors.price}
            disabled={isLoading}
          />
          {errors.price && <ErrorText>{errors.price}</ErrorText>}
        </FormField>

        {/* Stock */}
        <FormField>
          <Label htmlFor="stock">Stock Quantity *</Label>
          <Input
            id="stock"
            name="stock"
            type="number"
            min="0"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Enter stock quantity"
            hasError={!!errors.stock}
            disabled={isLoading}
          />
          {errors.stock && <ErrorText>{errors.stock}</ErrorText>}
        </FormField>

        {/* Active Status */}
        <FormField>
          <Label>Product Status</Label>
          <CheckboxWrapper>
            <Checkbox
              id="isActive"
              name="isActive"
              type="checkbox"
              checked={formData.isActive}
              onChange={handleChange}
              disabled={isLoading}
            />
            <CheckboxLabel htmlFor="isActive">
              Active (Product will be visible to customers)
            </CheckboxLabel>
          </CheckboxWrapper>
        </FormField>

        {/* Image Upload */}
        <FormField>
          <Label htmlFor="image">Product Image {!isEditMode && "*"}</Label>
          <FileInputWrapper>
            <HiddenFileInput
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              disabled={isLoading}
            />
            <FileInputLabel htmlFor="image">
              {imageFile
                ? imageFile.name
                : isEditMode
                  ? "Click to change image"
                  : "Click to upload image"}
            </FileInputLabel>
          </FileInputWrapper>
          {errors.image && <ErrorText>{errors.image}</ErrorText>}

          {imagePreview && (
            <ImagePreviewContainer>
              <PreviewImage src={imagePreview} alt="Product preview" />
            </ImagePreviewContainer>
          )}
        </FormField>

        {/* Action Buttons */}
        <ButtonGroup>
          <CancelButton type="button" onClick={onClose} disabled={isLoading}>
            Cancel
          </CancelButton>
          <Button type="submit" disabled={isLoading}>
            {isLoading
              ? "Saving..."
              : isEditMode
                ? "Update Product"
                : "Create Product"}
          </Button>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

export default AdminProductForm;
