import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 52,
    }}>
      <h2 style={{
        fontWeight: 'bold',
      }}>&copy; 2023 Shark and Shrimp</h2>
    </footer>
  )
}