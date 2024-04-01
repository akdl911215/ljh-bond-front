import React, { ReactNode } from 'react';

interface CardLayoutProps {
  title?: string;
  children: ReactNode;
}

const CardLayout: React.FC<CardLayoutProps> = ({ title, children }) => {
  return (
    <div className="user-card">
      {title && <h3>{title}</h3>}
      <div className="card-content">{children}</div>
    </div>
  );
};

export default CardLayout;