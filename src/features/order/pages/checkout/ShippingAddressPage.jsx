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
import { FormTitle, FormCard, BackLink } from "./ShippingAddressPage.styles";
import { useShippingAddressForm } from "../../useShippingAddressForm";
import { useNavigate } from "react-router-dom";

const ShippingAddressPage = () => {
  const navigate = useNavigate();
  const { register, errors, onSubmit } = useShippingAddressForm();

  return (
    <FormCard>
      <BackLink onClick={() => navigate(-1)}>
        <ArrowLeft size={14} /> Back
      </BackLink>
      <FormTitle>Add Shipping Address</FormTitle>
      <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
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
