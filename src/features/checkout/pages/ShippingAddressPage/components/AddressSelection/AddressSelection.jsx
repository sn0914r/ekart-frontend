import AddressCard from "../AddressCard/AddressCard";
import Button from "@shared/components/Button/Button";
import * as S from "./AddressSelection.styles";

const AddressSelection = ({
  addresses,
  selectedAddress,
  onSelectAddress,
  onAddAddress,
}) => {
  return (
    <div>
      <S.SectionTitle>Select Delivery Address</S.SectionTitle>

      {addresses.length > 0 ? (
        <S.AddressGrid>
          {addresses.map((add) => (
            <AddressCard
              key={add.id}
              address={add}
              isSelected={selectedAddress?.id === add.id}
              onSelect={onSelectAddress}
            />
          ))}
        </S.AddressGrid>
      ) : (
        <div className="alert alert-warning mb-4">
          No addresses found. Please add a shipping address to proceed.
        </div>
      )}
      <Button onClick={onAddAddress}>Add Address</Button>
    </div>
  );
};

export default AddressSelection;
