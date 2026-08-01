import React, { useState } from "react";
import { CreditCard, QrCode, Building2, Wallet } from "lucide-react";
import * as S from "./PaymentMethodsPage.styles";
import { useInitatePayment } from "../../hooks/ui/useInitatePayment";
import CheckoutHeader from "../CheckoutPage/components/CheckoutHeader";
import CheckoutSidebar from "../CheckoutPage/components/CheckoutSidebar";

import { useGetOrderQuery } from "@features/order/hooks/api/useGetOrderQuery";

import { useLocation } from 'react-router-dom';
import { toast } from '@lib/toast';
import { useCreateOrderMutation } from '@features/order/hooks/api/useCreateOrderMutation';

const PAYMENT_METHODS = [
  {
    id: "upi",
    name: "UPI",
    description: "Pay using any UPI app",
    icon: QrCode,
  },
  {
    id: "card",
    name: "Credit / Debit Card",
    description: "Pay using Visa, MasterCard, RuPay, etc.",
    icon: CreditCard,
  },
  {
    id: "netbanking",
    name: "Net Banking",
    description: "Pay using your bank account",
    icon: Building2,
  },
  {
    id: "wallet",
    name: "Wallets",
    description: "Pay using digital wallets",
    icon: Wallet,
  },
];

const PaymentMethodsPage = () => {
  const location = useLocation();
  const selectedAddress = location.state?.selectedAddress;

  const [selectedMethod, setSelectedMethod] = useState(null);
  const { handleInitiatePayment, isProcessing: isPaymentProcessing, orderId: routeOrderId, isWaitingForCashfree } = useInitatePayment();
  const [createdOrderId, setCreatedOrderId] = useState(null);
  
  const activeOrderId = createdOrderId || routeOrderId;
  const { data: orderResponse } = useGetOrderQuery(activeOrderId);
  const { mutate: createOrder, isPending: isCreatingOrder } = useCreateOrderMutation();

  const order = orderResponse?.data;
  const overrideSubtotal = order?.subTotal;
  const overrideTotalItems = order?.orderSnapshot?.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const isProcessing = isPaymentProcessing || isCreatingOrder;

  const onProceed = () => {
    if (!selectedMethod) return;

    if (!activeOrderId) {
      if (!selectedAddress) {
        toast.error("Shipping address is missing");
        return;
      }
      
      const { id, ...shippingAddress } = selectedAddress;
      const toastId = toast.loading("Creating order...");

      createOrder(
        { shippingAddress },
        {
          onSuccess: (orderDetails) => {
            const newOrderId = orderDetails?.data?.orderId || orderDetails?.orderId || orderDetails;
            if (!newOrderId || typeof newOrderId !== 'string') {
              toast.error("Order ID missing", { id: toastId });
              return;
            }
            toast.dismiss(toastId);
            setCreatedOrderId(newOrderId);
            handleInitiatePayment(selectedMethod, newOrderId);
          },
          onError: (err) => {
            toast.error(err.message || "Failed to create order", { id: toastId });
          }
        }
      );
    } else {
      handleInitiatePayment(selectedMethod, activeOrderId);
    }
  };

  if (isWaitingForCashfree) {
    return (
      <S.PageWrapper>
        <div className="container">
          <div className="row justify-content-center" style={{ minHeight: '60vh', alignItems: 'center' }}>
            <div className="col-12 col-md-6 text-center">
              <S.WaitingSpinner />
              <S.Title style={{ marginTop: '1.5rem' }}>Waiting for payment...</S.Title>
              <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-sans)', marginTop: '0.5rem' }}>
                Complete your payment in the popup window. This page will update automatically when the payment is confirmed.
              </p>
            </div>
          </div>
        </div>
      </S.PageWrapper>
    );
  }

  return (
    <S.PageWrapper>
      <div className="container">
        <CheckoutHeader />

        <div className="row g-4 g-lg-5">
          <div className="col-12 col-lg-8">
            <S.Title>Select Payment Method</S.Title>

            <div className="row g-3">
              {PAYMENT_METHODS.map((method) => {
                const Icon = method.icon;
                return (
                  <div key={method.id} className="col-12">
                    <S.MethodCard
                      selected={selectedMethod === method.id}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      <div className="row align-items-center w-100 m-0">
                        <div className="col-auto ps-0">
                          <S.MethodIconWrapper>
                            <Icon size={24} />
                          </S.MethodIconWrapper>
                        </div>
                        <div className="col pe-0">
                          <S.MethodName>{method.name}</S.MethodName>
                          <S.MethodDescription>
                            {method.description}
                          </S.MethodDescription>
                        </div>
                      </div>
                    </S.MethodCard>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <CheckoutSidebar
              isProcessing={isProcessing}
              canPlaceOrder={!!selectedMethod}
              onClickOverride={onProceed}
              buttonTextOverride="Proceed to Pay"
              overrideSubtotal={overrideSubtotal}
              overrideTotalItems={overrideTotalItems}
            />
          </div>
        </div>
      </div>
    </S.PageWrapper>
  );
};

export default PaymentMethodsPage;
