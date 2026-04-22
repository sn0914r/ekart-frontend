import Modal from "@shared/components/Modal/Modal";
import Field from "@shared/components/Field/Field";
import Button from "@shared/components/Button/Button";
import { User, MapPin, Hash, Phone, Map } from "lucide-react";
import { useShippingForm } from "../../useShippingForm";

import {
  FormContainer,
  InputRow,
} from "./UpdateShippingModal.styles";

const UpdateShippingModal = ({ isOpen, onClose, orderId, defaultAddress }) => {
  const { register, handleSubmit, errors, isSubmitting, reset } = useShippingForm({
    orderId,
    defaultValues: defaultAddress,
    onSuccess: () => {
      onClose();
    },
  });

  const handleClose = () => {
    reset(); // Reset form if cancelled
    onClose();
  };

  const formContent = (
    <FormContainer id="shipping-update-form" onSubmit={handleSubmit}>
      <Field
        label="Full Name"
        icon={User}
        error={errors.name}
        {...register("name")}
        placeholder="Recipient Name"
      />

      <Field
        as="textarea"
        rows={3}
        label="Street Address"
        icon={MapPin}
        error={errors.address}
        {...register("address")}
        placeholder="123 Main St, Apt 4B"
        style={{ resize: "vertical", paddingTop: "0.75rem", boxSizing: "border-box" }}
      />

      <InputRow>
        <Field
          label="City"
          icon={MapPin}
          error={errors.city}
          {...register("city")}
          placeholder="City"
        />
        <Field
          label="State/Province"
          icon={Map}
          error={errors.state}
          {...register("state")}
          placeholder="State"
        />
      </InputRow>

      <input type="hidden" value="India" {...register("country")} />
      <Field
        label="Postal Code"
        icon={Hash}
        error={errors.pincode}
        {...register("pincode")}
        placeholder="123456"
      />

      <Field
        label="Phone Number"
        icon={Phone}
        error={errors.phone}
        {...register("phone")}
        placeholder="+1 234 567 8900"
      />
    </FormContainer>
  );

  const footerContent = (
    <Button 
      type="submit" 
      form="shipping-update-form" 
      disabled={isSubmitting}
      style={{ width: "100%" }}
    >
      {isSubmitting ? "Saving..." : "Save Changes"}
    </Button>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Update Delivery Address"
      maxWidth="600px"
      footer={footerContent}
    >
      {formContent}
    </Modal>
  );
};

export default UpdateShippingModal;
