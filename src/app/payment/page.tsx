'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Head from 'next/head';

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const date = searchParams.get('date');
  const time = searchParams.get('time');
  const field = searchParams.get('field');
  const duration = searchParams.get('duration');
  const totalPrice = searchParams.get('totalPrice');

  const handlePayment = () => {
    if (paymentMethod === 'cash' || paymentMethod === 'qris') {
      const queryParams = new URLSearchParams({
        date: date || '',
        time: time || '',
        field: field || '',
        duration: duration || '',
        totalPrice: totalPrice || '',
        paymentMethod: paymentMethod,
      }).toString();

      router.push(`/konfirmasi?${queryParams}`);
    } else {
      alert('Pilih metode pembayaran dulu ya.');
    }
  };

  return (
    <>
      <Head>
        <title>Pembayaran</title>
      </Head>
      <div style={{ padding: '20px' }}>
        <h1>Pilih Metode Pembayaran</h1>
        {date && time && field && duration && totalPrice && (
          <p>
            Kamu memesan lapangan {field} pada {date} jam {time} selama {duration} jam dengan total harga Rp{totalPrice}.
          </p>
        )}
        <div>
          <label>
            <input
              type="radio"
              value="cash"
              name="payment"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="qris"
              name="payment"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            QRIS
          </label>
        </div>
        <button
          onClick={handlePayment}
          disabled={!paymentMethod}
          style={{
            marginTop: '10px',
            padding: '8px 15px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Lanjut Konfirmasi
        </button>
      </div>
    </>
  );
}
