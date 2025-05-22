'use client';
import React from 'react';

export default function ReportPreview() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <img
          src="images/logoLJ.png"
          alt="Logo"
          style={{ width: '80px', height: '80px' }}
        />
        <div style={{ width: '100%', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif' , marginBottom: '5px' }}>LagaJawa Futsal</h2>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Jl. Bunga Melati No.9, Malang, Jawa Timur
          </p>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Telepon: 0811 3443 4544 
          </p>
        </div>
      </div>

      {/* Informasi Pemesanan */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Informasi Pemesanan</h3>
        <div style={styles.infoGrid}>
          <div><strong>Nama Pemesan:</strong> Budi Santoso</div>
          <div><strong>No Pemesanan:</strong> BOOK-20250520-001</div>
          <div><strong>Metode Pembayaran:</strong> Transfer Bank</div>
          <div><strong>Total Pembayaran:</strong> Rp100.000</div>
          <div><strong>Tanggal Cetak:</strong> 15-05-2025</div>
        </div>
      </div>

      {/* Tabel Booking */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Detail Booking</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>No</th>
              <th style={styles.th}>Nama Pemesan</th>
              <th style={styles.th}>Lapangan</th>
              <th style={styles.th}>No Pemesanan</th>
              <th style={styles.th}>Waktu Mulai</th>
              <th style={styles.th}>Waktu Selesai</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>1</td>
              <td style={styles.td}>Budi Santoso</td>
              <td style={styles.td}>Lapangan A</td>
              <td style={styles.td}>BOOK-20250520-001</td>
              <td style={styles.td}>10:00</td>
              <td style={styles.td}>11:00</td>
              <td style={styles.td}>Lunas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Styling
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // untuk memusatkan logo dan teks secara horizontal
    justifyContent: 'center',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
    gap: '10px 20px',
    fontSize: '14px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
    backgroundColor: '#fff',
  },
  th: {
    backgroundColor: '#0f172a',
    color: '#fff',
    padding: '10px',
    border: '1px solid #ccc',
  },
  td: {
    padding: '10px',
    border: '1px solid #ccc',
    textAlign: 'center',
    backgroundColor: '#fefefe',
  },
};