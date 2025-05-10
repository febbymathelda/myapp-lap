import React from "react";
export default function BookingGrid({
  selectedSlot,
  onSelect,
}: {
  selectedSlot: { time: string; field: number } | null;
  onSelect: (val: { time: string; field: number }) => void;
}) {
  const times = ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];
  const fields = [1, 2, 3, 4];

  return (
    <div className="grid grid-cols-[100px_repeat(4,1fr)] gap-2 bg-white p-4 rounded-md shadow border border-black">
      <div></div>
      {fields.map((f) => (
        <div key={f} className="font-semibold text-center text-gray-800">Lapangan {f}</div>
      ))}
      {times.map((time) => (
        <React.Fragment key={time}>
          <div className="text-sm py-2 text-gray-700">{time}</div>
          {fields.map((field) => {
            const selected = selectedSlot?.time === time && selectedSlot?.field === field;
            return (
              <button
                key={`${field}-${time}`}
                className={`border py-2 w-full text-center text-sm rounded ${selected ? "bg-green-300" : "bg-gray-100 hover:bg-gray-200"}`}
                onClick={() => onSelect({ time, field })}
              >
                Pesan
              </button>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}
