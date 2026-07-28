import React, { useState } from 'react';
import { CreditCard, Copy, Check } from "lucide-react";
import * as S from "./Common.styles";

const PaymentDetails = ({ paymentDetails }) => {
  const [isCopied, setIsCopied] = useState(false);

  if (!paymentDetails) return null;

  const handleCopy = () => {
    if (paymentDetails.poePaymentId) {
      navigator.clipboard.writeText(paymentDetails.poePaymentId);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <S.ContentCard>
      <S.SectionTitle>
        <S.TitleGroup>
          <S.TitleIcon>
            <CreditCard size={24} />
          </S.TitleIcon>
          Payment Details
        </S.TitleGroup>
      </S.SectionTitle>

      <S.InfoBlockRow>
        <S.InfoTextGroup>
          <S.InfoLabel>Payment Method</S.InfoLabel>
          <S.InfoValue style={{ textTransform: 'capitalize' }}>
            {paymentDetails.paymentMethod || 'N/A'}
            {paymentDetails.gateway ? ` (${paymentDetails.gateway})` : ''}
          </S.InfoValue>
        </S.InfoTextGroup>
      </S.InfoBlockRow>

      {paymentDetails.poePaymentId && (
        <S.InfoBlockRow>
          <S.InfoTextGroup>
            <S.InfoLabel>Transaction ID</S.InfoLabel>
            <S.InfoValue className="font-monospace small text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {paymentDetails.poePaymentId}
              <button 
                onClick={handleCopy}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isCopied ? 'var(--color-success)' : 'var(--text-secondary)',
                  borderRadius: '4px',
                  transition: 'all 0.2s ease',
                }}
                title="Copy Transaction ID"
              >
                {isCopied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </S.InfoValue>
          </S.InfoTextGroup>
        </S.InfoBlockRow>
      )}
    </S.ContentCard>
  );
};

export default PaymentDetails;
