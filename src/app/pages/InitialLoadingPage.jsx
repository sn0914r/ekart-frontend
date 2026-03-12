import React from "react";
import {
  LoadingContainer,
  BrandShimmerContainer,
  ShimmerText,
  SubText,
} from "./initialLoadingPage.styles";

const InitialLoadingPage = ({ status }) => {
  return (
    <LoadingContainer>
      <BrandShimmerContainer>
        <ShimmerText>EKART</ShimmerText>
        <SubText>{status || "LOADING YOUR COLLECTION..."}</SubText>
      </BrandShimmerContainer>
    </LoadingContainer>
  );
};

export default InitialLoadingPage;
