import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm";
import { CircleLoader } from "react-spinners";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ totalPrice, closeModal, orderData }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClintSecret = async () => {
      //server request
      const { data } = await axiosSecure.post("/create-payment-intent", {
        quantity: orderData?.quantity,
        plantId: orderData?.plantId,
      });
      setClientSecret(data?.clientSecret);
    };
    getClintSecret();
  }, [axiosSecure, orderData]);

  const handleSubmit = async (event) => {
    setProcessing(true);
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js এখনো লোড হয়নি
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError(null);
      // এখানে আপনি backend-এ paymentMethod.id পাঠাবেন
      // এবং paymentIntent তৈরি করবেন

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
      console.log(result)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
        className="border rounded p-2"
      />
      {cardError && <p className="text-red-500 mb-6">{cardError}</p>}
      <div className="flex justify-between gap-3">
        <button
          type="submit"
          disabled={!stripe || processing}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 flex items-center justify-center"
        >
          {processing ? (
            <CircleLoader size={24} color="#fff" />
          ) : (
            `Pay ${totalPrice}$`
          )}
        </button>

        <button
          onClick={closeModal}
          type="button"
          className="w-full bg-red-700 text-white py-2 rounded hover:bg-green-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
