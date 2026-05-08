import ShippingAddressHeader from "./components/ShippingAddressHeader";
import ShippingAddressForm from "./components/ShippingAddressForm";
import * as S from "./ShippingAddressPage.styles";

const ShippingAddressPage = () => {
  return (
    <S.FormCard>
      <ShippingAddressHeader />
      <ShippingAddressForm />
    </S.FormCard>
  );
};

export default ShippingAddressPage;
