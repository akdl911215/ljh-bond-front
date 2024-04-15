import React, { ReactNode } from 'react';

interface CardLayoutProps {
  title?: string;
  className?: string; // Add this line
  children: ReactNode;
}

const CardLayout: React.FC<CardLayoutProps> = ({ title, className, children }) => {
  return (
    <div className={`user-card ${className}`}> {/* Apply className here */}
      {title && <h3>{title}</h3>}
      <div className="card-content">{children}</div>
    </div>
  );
};

export default CardLayout;