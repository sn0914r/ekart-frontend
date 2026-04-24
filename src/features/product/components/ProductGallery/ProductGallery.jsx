import { useState, useEffect } from "react";
import { GalleryContainer, MainImageWrapper, MainImage, ThumbnailList, Thumbnail } from "./ProductGallery.styles";

const ProductGallery = ({ images = [] }) => {
  const [activeImage, setActiveImage] = useState(images[0] || null);

  // Update active image if the prop changes (e.g. navigation to new color)
  useEffect(() => {
    setActiveImage(images[0] || null);
  }, [images]);

  if (!images.length || !activeImage) {
    return (
      <GalleryContainer>
        <MainImageWrapper>
          <div style={{ padding: "2rem", textAlign: "center", color: "#999" }}>No Image Available</div>
        </MainImageWrapper>
      </GalleryContainer>
    );
  }

  return (
    <GalleryContainer>
      <MainImageWrapper>
        <MainImage src={activeImage} alt="Product Viewer" loading="lazy" />
      </MainImageWrapper>
      <ThumbnailList>
        {images.map((img, i) => (
           <Thumbnail 
             key={i} 
             src={img} 
             alt={`Thumbnail ${i}`}
             active={activeImage === img}
             onClick={() => setActiveImage(img)}
           />
        ))}
      </ThumbnailList>
    </GalleryContainer>
  );
};

export default ProductGallery;
