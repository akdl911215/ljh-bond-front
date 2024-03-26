import React from 'react';
import { User, isDebtor } from './UserData';

interface DebtorCardProps {
  user: User;
}

const DebtorCard: React.FC<DebtorCardProps> = ({ user }) => {
  if (!isDebtor(user)) {
    return null; // or some error handling
  }
  return (
    <div className="user-card">
      <h3>Debtor Information</h3>
      <p>Name: {user.name}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Due Date: {user.dueDate}</p>
      <p>Annual Revenue: ${user.annualRevenue.toLocaleString()}</p>
      <p>Account Number: {user.accountNumber}</p>
      <p>Address: {user.address}</p>
      <p>Tax Payment History: {user.taxPaymentHistory}</p>
      <p>Credit Card Usage: {user.creditCardUsage}</p>
      <p>Credit Score: {user.creditScore}</p>
    </div>
  );
};

export default DebtorCard;