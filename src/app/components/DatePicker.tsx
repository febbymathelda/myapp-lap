"use client";
export default function DatePicker({
  selectedDate,
  onChange,
}: {
  selectedDate: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="mb-4">
      <label htmlFor="datePicker" className="block mb-1">Pilih Tanggal:</label>
      <input
        type="date"
        id="datePicker"
        className="border border-black px-2 py-1 text-black" // Ditambahkan text-black
        value={selectedDate}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}