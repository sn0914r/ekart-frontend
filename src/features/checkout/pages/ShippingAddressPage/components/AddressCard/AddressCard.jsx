import * as S from "./AddressCard.styles";

const AddressCard = ({ address, isSelected, onSelect }) => {
  const { id, name, address: add, city, state, country, pincode } = address;

  return (
    <S.CheckLabel>
      <S.RadioInput
        type="radio"
        name="address"
        value={id}
        checked={isSelected}
        onChange={() => onSelect(address)}
      />
      <S.CardWrapper isSelected={isSelected}>
        <S.Name>{name}</S.Name>
        <S.AddressText className="text-truncate">{add}</S.AddressText>
        <S.AddressText>
          {city}, {state} - {pincode}
        </S.AddressText>
        <S.AddressText>{country}</S.AddressText>
      </S.CardWrapper>
    </S.CheckLabel>
  );
};

export default AddressCard;
