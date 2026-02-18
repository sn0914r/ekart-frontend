import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  User,
  Phone,
  MapPin,
  Building,
  Map as MapIcon,
  ArrowLeft,
} from "lucide-react";

import AuthInput from "../../../../shared/components/Field";
import Button from "../../../../shared/components/Button";

import { shippingAddressSchema } from "../../order.schema";

import { FormTitle, FormCard, BackLink } from "./ShippingAddressPage.styles";
import { useAddress } from "./useAddress";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ShippingAddressPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(shippingAddressSchema),
  });
  const { setAddress } = useAddress();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setAddress(data);
    toast.success("Address saved successfully!");
    navigate("/orders/checkout");
  };

  return (
    <FormCard>
      <BackLink onClick={() => navigate(-1)}>
        <ArrowLeft size={14} /> Back
      </BackLink>
      <FormTitle>Add Shipping Address</FormTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-3"
      >
        <AuthInput
          label="Full Name"
          placeholder="Enter recipient's name"
          icon={User}
          error={errors.name}
          {...register("name")}
        />

        <AuthInput
          label="Phone Number"
          placeholder="+91 XXXXXXXXXX"
          icon={Phone}
          error={errors.phone}
          {...register("phone")}
        />

        <AuthInput
          label="Address Line"
          placeholder="House no, Building, Street"
          icon={MapPin}
          error={errors.address}
          {...register("address")}
        />

        <div className="row g-3">
          <div className="col-md-6">
            <AuthInput
              label="City"
              placeholder="City"
              icon={Building}
              error={errors.city}
              {...register("city")}
            />
          </div>
          <div className="col-md-6">
            <AuthInput
              label="Pincode"
              placeholder="6-digit Pincode"
              icon={MapPin}
              error={errors.pincode}
              {...register("pincode")}
            />
          </div>
        </div>

        <AuthInput
          label="State"
          placeholder="State"
          icon={MapIcon}
          error={errors.state}
          {...register("state")}
        />

        <Button type="submit" style={{ marginTop: "1rem" }}>
          Save Address
        </Button>
      </form>
    </FormCard>
  );
};

export default ShippingAddressPage;
