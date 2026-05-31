import Button from "@shared/components/Button/Button";
import AuthInput from "@shared/components/Field/Field";

import { useShippingAddressForm } from "./useShippingAddressForm";
import { User, Phone, MapPin, Building, Map as MapIcon } from "lucide-react";
import * as S from "./ShippingAddressForm.styles";

export const ShippingAddressForm = () => {
  const { register, errors, onSubmit } = useShippingAddressForm();

  return (
    <S.Form onSubmit={onSubmit}>
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
        label="Address"
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
    </S.Form>
  );
};

export default ShippingAddressForm;
