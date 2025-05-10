import Link from 'next/link';

interface FieldCardProps {
  id: number;
  name: string;
  type: string;
  price: number;
}

const FieldCard: React.FC<FieldCardProps> = ({ id, name, type, price }) => {
  return (
    <div className="field-card">
      <h3>{name}</h3>
      <p>Jenis Lapangan: {type}</p>
      <p>Harga per Jam: Rp{price}</p>
      <Link href={`/booking?fieldId=${id}&fieldName=${name}&fieldPrice=${price}`}>
        <button>Pesan Sekarang</button>
      </Link>
      <style jsx>{`
        .field-card {
          border: 1px solid #ccc;
          padding: 1rem;
          margin-bottom: 1rem;
          border-radius: 5px;
        }
        h3 {
          margin-top: 0;
        }
        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          text-decoration: none;
        }
        button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default FieldCard;