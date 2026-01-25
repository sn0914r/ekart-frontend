import styled from "@emotion/styled";
import { Edit3 } from "lucide-react";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eeeeee;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Thumb = styled.div`
  aspect-ratio: 3/4;
  background-color: #f9f9f9;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
  }

  ${Card}:hover img {
    transform: scale(1.05);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  padding: 0.4rem 0.8rem;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  border: 1px solid #eee;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MainLabel = styled.h3`
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const MetaLabel = styled.span`
  font-size: 0.7rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const IconButton = styled.button`
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
  }
`;

const InventoryTab = ({ products, onEdit }) => {
  console.log(products);
  return (
    <CardGrid>
      {products.map((product) => (
        <Card key={product.id}>
          <Thumb>
            <img src={product.imageUrl} alt={product.name} />
            <Badge active={product.isActive}>
              {product.isActive ? "Active" : "Not Active"}
            </Badge>
          </Thumb>
          <Content>
            <MainLabel>{product.name}</MainLabel>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <MetaLabel>Stock: {product.stock}</MetaLabel>
              <MainLabel style={{ fontSize: "0.85rem" }}>
                ₨ {product.price?.toLocaleString()}
              </MainLabel>
            </div>
            <MetaLabel style={{ fontSize: "0.6rem", marginTop: "0.25rem" }}>
              ID: {product.id.slice(0, 8)}
            </MetaLabel>
          </Content>
          <Footer>
            <IconButton onClick={() => onEdit(product)}>
              Edit Product <Edit3 size={14} />
            </IconButton>
          </Footer>
        </Card>
      ))}
    </CardGrid>
  );
};

export default InventoryTab;
