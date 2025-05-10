'use client';
import React, { useState, useEffect } from 'react';
import DatePicker from '../components/DatePicker';
import BookingGrid from '../components/BookingGrid';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { useRouter } from 'next/navigation';

const fieldPrices = {
  1: 50000,
  2: 60000,
  3: 55000,
};

interface SelectedSlot {
  time: string;
  field: number;
}

export default function BookingPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  const [duration, setDuration] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [hourlyPrice, setHourlyPrice] = useState<number>(0);

  useEffect(() => {
    if (selectedSlot?.field) {
      setHourlyPrice(fieldPrices[selectedSlot.field as keyof typeof fieldPrices] || 0);
    } else {
      setHourlyPrice(0);
    }
  }, [selectedSlot]);

  useEffect(() => {
    setTotalPrice(hourlyPrice * duration);
  }, [duration, hourlyPrice]);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setDuration(1);
    setTotalPrice(0);
    console.log('Tanggal dipilih:', date);
  };

  const handleSlotSelect = (slot: SelectedSlot) => {
    setSelectedSlot(slot);
    setDuration(1);
    console.log('Slot dipilih:', slot);
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDuration = parseInt(event.target.value);
    setDuration(isNaN(newDuration) || newDuration < 1 ? 1 : newDuration);
  };

  const handleBooking = () => {
    if (selectedSlot) {
      const queryParams = new URLSearchParams({
        date: selectedDate,
        time: selectedSlot.time,
        field: selectedSlot.field.toString(),
        duration: duration.toString(),
        totalPrice: totalPrice.toString(),
        hourlyPrice: hourlyPrice.toString(),
      }).toString();
  
      router.push(`/payment?${queryParams}`);
    } else {
      alert('Silakan pilih waktu dan lapangan terlebih dahulu.');
    }
  };
  
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800 ">Silahkan Masukkan Tanggal, jam, dan lapangan yang anda inginkan</h1>

        <div className="mb-6">
          <DatePicker selectedDate={selectedDate} onChange={handleDateChange} />
        </div>

        <div className="mb-6 bg-gray-50 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Pilih Waktu dan Lapangan</h2>
          <BookingGrid selectedSlot={selectedSlot} onSelect={handleSlotSelect} />
        </div>

        {selectedSlot && (
          <div className="mt-6 p-4 bg-blue-100 rounded-md border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Konfirmasi Pemesanan</h3>
            <p className="text-black">Tanggal: {format(new Date(selectedDate), 'dd MMMM', { locale: id })}</p>
            <p className="text-black">Jam: {selectedSlot.time}</p>
            <p className="text-black">Lapangan: Lapangan {selectedSlot.field}</p>
            <div className="mb-2">
              <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">
                Durasi (Jam):
              </label>
              <input
                type="number"
                id="duration"
                min="1"
                value={duration}
                onChange={handleDurationChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <p className="text-green-600 font-semibold">Total Harga: Rp{totalPrice.toLocaleString()}</p>
            <button
              onClick={handleBooking}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Booking Sekarang
            </button>
          </div>
        )}

        {!selectedSlot && (
          <p className="mt-4 text-gray-500">Silakan pilih waktu dan lapangan untuk melakukan pemesanan.</p>
        )}
      </div>
    </div>
  );
}