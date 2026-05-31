import React from 'react';
import { MapPin, User, Phone } from "lucide-react";
import * as C from "../Common.styles";

const DeliveryInfo = ({ shippingAddress }) => {
  if (!shippingAddress) return null;

  return (
    <C.ContentCard>
      <C.SectionTitle>
        <C.TitleGroup>
          <C.TitleIcon>
            <MapPin size={24} />
          </C.TitleIcon>
          Delivery Information
        </C.TitleGroup>
      </C.SectionTitle>

      <C.InfoBlockRow>
        <C.InfoIconWrapper>
          <User size={16} />
        </C.InfoIconWrapper>
        <C.InfoTextGroup>
          <C.InfoLabel>Recipient Name</C.InfoLabel>
          <C.InfoValue>{shippingAddress.name}</C.InfoValue>
        </C.InfoTextGroup>
      </C.InfoBlockRow>

      <C.InfoBlockRow>
        <C.InfoIconWrapper>
          <MapPin size={16} />
        </C.InfoIconWrapper>
        <C.InfoTextGroup>
          <C.InfoLabel>Delivery Address</C.InfoLabel>
          <C.InfoValue>
            {shippingAddress.address}
            <br />
            {shippingAddress.city},{" "}
            {shippingAddress.state}
            <br />
            {shippingAddress.country} -{" "}
            {shippingAddress.pincode}
          </C.InfoValue>
        </C.InfoTextGroup>
      </C.InfoBlockRow>

      <C.InfoBlockRow>
        <C.InfoIconWrapper>
          <Phone size={16} />
        </C.InfoIconWrapper>
        <C.InfoTextGroup>
          <C.InfoLabel>Contact Number</C.InfoLabel>
          <C.InfoValue>{shippingAddress.phone}</C.InfoValue>
        </C.InfoTextGroup>
      </C.InfoBlockRow>
    </C.ContentCard>
  );
};

export default DeliveryInfo;
