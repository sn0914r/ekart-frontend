import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { X, Save, ArrowLeft, Upload } from "lucide-react";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.98);
  z-index: 10000;
  padding: 10rem 3rem;
  overflow-y: auto;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: 700;
`;

const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: 4rem;
  letter-spacing: -0.02em;
  margin: 0;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Label = styled.label`
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: var(--text-secondary);
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #eeeeee;
  padding: 1rem 0;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  outline: none;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    border-bottom-color: #000;
  }
`;

const CheckboxField = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #fafafa;
  border: 1px solid #eeeeee;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #000;
  }
`;

const Checkbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  accent-color: #000;
`;

const PrimaryBtn = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1.25rem 2.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
    transform: translateY(-2px);
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #000;
  opacity: 0.4;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const ImageUploader = styled.div`
  border: 1px dashed #cccccc;
  aspect-ratio: 3/4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #000;
    background-color: #fcfcfc;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
`;

const ProductEditor = ({
  isOpen,
  onClose,
  product,
  onSubmit,
  isSubmitting,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    isActive: true,
    file: null,
  });
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        stock: product.stock || "",
        isActive: product.isActive !== undefined ? product.isActive : true,
        file: null,
      });
      setPreview(product.imageUrl || "");
    } else {
      setFormData({
        name: "",
        price: "",
        stock: "",
        isActive: true,
        file: null,
      });
      setPreview("");
    }
  }, [product, isOpen]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, file: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleLocalSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Overlay isOpen={isOpen}>
      <FormContainer>
        <Header>
          <TitleGroup>
            <Subtitle>Manage Product</Subtitle>
            <Title>{product ? "Update Product" : "Create Product"}</Title>
          </TitleGroup>
          <IconButton onClick={onClose}>
            <X size={32} strokeWidth={1} />
          </IconButton>
        </Header>

        <Form onSubmit={handleLocalSubmit}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
          >
            <Field>
              <Label>Product Name</Label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </Field>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
              }}
            >
              <Field>
                <Label>Product Price (INR)</Label>
                <Input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  required
                />
              </Field>
              <Field>
                <Label>Product Stock</Label>
                <Input
                  type="number"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                  }
                  required
                />
              </Field>
            </div>

            <CheckboxField
              onClick={() =>
                setFormData((prev) => ({ ...prev, isActive: !prev.isActive }))
              }
            >
              <Checkbox type="checkbox" checked={formData.isActive} readOnly />
              <Label style={{ margin: 0, cursor: "pointer" }}>
                Active in Collection
              </Label>
            </CheckboxField>

            {!product && (
              <Field>
                <Label>Visual Asset</Label>
                <ImageUploader
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  {preview ? (
                    <img src={preview} alt="Asset Preview" />
                  ) : (
                    <>
                      <Upload size={30} strokeWidth={1} color="#ccc" />
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#999",
                          fontWeight: 600,
                        }}
                      >
                        IMPORT ASSET
                      </span>
                    </>
                  )}
                  <input
                    id="fileInput"
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </ImageUploader>
                <p
                  style={{
                    fontSize: "0.65rem",
                    color: "#ccc",
                    textAlign: "center",
                    marginTop: "1.5rem",
                  }}
                >
                  Full resolution assets required for archival integrity.
                </p>
              </Field>
            )}

            <PrimaryBtn
              type="submit"
              style={{ marginTop: "1rem" }}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Adding..."
                : product
                  ? "Save Changes"
                  : "Add Product"}{" "}
              <Save size={18} />
            </PrimaryBtn>
          </div>
        </Form>
        <IconButton
          style={{
            marginTop: "4rem",
            opacity: 0.6,
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
          onClick={onClose}
        >
          <ArrowLeft size={16} /> Discard Product Draft
        </IconButton>
      </FormContainer>
    </Overlay>
  );
};

export default ProductEditor;
