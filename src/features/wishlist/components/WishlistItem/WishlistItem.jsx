import { Eye, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  ItemWrapper,
  ImageContainer,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemPrice,
  Actions,
  ActionButton,
  RemoveButtonWrapper
} from "./WishlistItem.styles";

const WishlistItem = ({ item, onRemove, isRemoving }) => {
  const navigate = useNavigate();
  return (
    <ItemWrapper>
      <ImageContainer>
        <ItemImage src={item.thumbnail} alt={item.name} />
        <RemoveButtonWrapper 
          onClick={() => onRemove(item.productId)} 
          disabled={isRemoving}
          title="Remove from Wishlist"
        >
          <Trash2 size={16} />
        </RemoveButtonWrapper>
      </ImageContainer>
      <ItemDetails>
        <ItemName title={item.name}>{item.name}</ItemName>
        <ItemPrice>₹{item.price}</ItemPrice>
      </ItemDetails>
      <Actions>
        <ActionButton 
          primary 
          onClick={() => navigate(`/product/${item.productId}`)}
        >
          <Eye size={16} /> View Product
        </ActionButton>
      </Actions>
    </ItemWrapper>
  );
};

export default WishlistItem;
