"use client";
export default function PaymentButton() {
  const handlePayment = () => {
    alert("Pembayaran berhasil!");
  };

  return (
    <button
      className="bg-blue-600 text-white px-6 py-2 rounded"
      onClick={handlePayment}
    >
      Booking
    </button>
  );
}
