import {
  CheckLabel,
  RadioInput,
  CardWrapper,
  Name,
  AddressText,
} from "./AddressCard.styles";

const AddressCard = ({ address, isSelected, onSelect }) => {
  const { id, name, address: add, city, state, country, pincode } = address;

  return (
    <CheckLabel>
      <RadioInput
        type="radio"
        name="address"
        value={id}
        checked={isSelected}
        onChange={() => onSelect(address)}
      />
      <CardWrapper isSelected={isSelected}>
        <Name>{name}</Name>
        <AddressText className="text-truncate">{add}</AddressText>
        <AddressText>
          {city}, {state} - {pincode}
        </AddressText>
        <AddressText>{country}</AddressText>
      </CardWrapper>
    </CheckLabel>
  );
};

export default AddressCard;
