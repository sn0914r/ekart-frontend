import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../shared/components/Button";
import AdminQuery from "../admin.query";
import { productSchema, productSchemaWithImage } from "../admin.schema";
import { X } from "lucide-react";
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
  CloseButton,
} from "./AdminProductForm.styles";
import { toast } from "sonner";

const AdminProductForm = ({ product, onClose, onSuccess, refetchProducts }) => {
  const isEditMode = !!product;
  const [imagePreview, setImagePreview] = useState(null);

  const createMutation = AdminQuery.usePostProductAdmin();
  const updateMutation = AdminQuery.usePatchProductAdmin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(isEditMode ? productSchema : productSchemaWithImage),
    defaultValues: {
      name: "",
      price: 0,
      stock: 0,
      isActive: true,
    },
  });

  const imageFiles = watch("image");

  useEffect(() => {
    if (product) {
      reset({
        name: product.name || "",
        price: product.price || 0,
        stock: product.stock || 0,
        isActive: product.isActive ?? true,
      });
      setImagePreview(product.imageUrl || null);
    }
  }, [product, reset]);

  useEffect(() => {
    if (imageFiles && imageFiles.length > 0) {
      const file = imageFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [imageFiles]);

  const onSubmit = async (data) => {
    const productData = {
      name: data.name.trim(),
      price: Number(data.price),
      stock: Number(data.stock),
      isActive: data.isActive,
    };

    if (isEditMode) {
      await updateMutation.mutateAsync({
        id: product._id,
        data: productData,
      });
    } else {
      const formDataToSend = new FormData();

      if (data.image && data.image.length > 0) {
        formDataToSend.append("file", data.image[0]);
      }
      formDataToSend.append("data", JSON.stringify(productData));

      await createMutation.mutateAsync(formDataToSend);
    }
    onSuccess();
    refetchProducts();
  };

  const isLoading =
    createMutation.isPending || updateMutation.isPending || isSubmitting;

  return (
    <FormContainer>
      <CloseButton onClick={onClose} type="button">
        <X size={20} />
      </CloseButton>
      <FormTitle>{isEditMode ? "Edit Product" : "Add New Product"}</FormTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name */}
        <FormField>
          <Label htmlFor="name">Product Name *</Label>
          <Input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Enter product name"
            hasError={!!errors.name}
            disabled={isLoading}
          />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </FormField>

        {/* Price */}
        <FormField>
          <Label htmlFor="price">Price (₹) *</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            min="0"
            {...register("price", { valueAsNumber: true })}
            placeholder="Enter price"
            hasError={!!errors.price}
            disabled={isLoading}
          />
          {errors.price && <ErrorText>{errors.price.message}</ErrorText>}
        </FormField>

        {/* Stock */}
        <FormField>
          <Label htmlFor="stock">Stock Quantity *</Label>
          <Input
            id="stock"
            type="number"
            min="0"
            {...register("stock", { valueAsNumber: true })}
            placeholder="Enter stock quantity"
            hasError={!!errors.stock}
            disabled={isLoading}
          />
          {errors.stock && <ErrorText>{errors.stock.message}</ErrorText>}
        </FormField>

        {/* Active Status */}
        <FormField>
          <Label>Product Status</Label>
          <CheckboxWrapper>
            <Checkbox
              id="isActive"
              type="checkbox"
              {...register("isActive")}
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
              {...register("image")}
              disabled={isLoading}
            />
            <FileInputLabel htmlFor="image">
              {imageFiles && imageFiles.length > 0
                ? imageFiles[0].name
                : isEditMode
                  ? "Click to change image"
                  : "Click to upload image"}
            </FileInputLabel>
          </FileInputWrapper>
          {errors.image && <ErrorText>{errors.image.message}</ErrorText>}

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
