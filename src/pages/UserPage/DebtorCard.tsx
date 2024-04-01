import React from 'react';
import { User, isDebtor } from './UserData';
import CardLayout from './CardLayout';

interface DebtorCardProps {
  user: User;
}

const DebtorCard: React.FC<DebtorCardProps> = ({ user }) => {
  if (!isDebtor(user)) {
    return null;
  }

  return (
    <CardLayout title="Debtor Information">
      <>
        <p>Name: {user.name}</p>
        <p>Phone Number: {user.phoneNumber}</p>
        <p>Due Date: {user.dueDate}</p>
        <p>Annual Revenue: ${user.annualRevenue.toLocaleString()}</p>
        <p>Account Number: {user.accountNumber}</p>
        <p>Address: {user.address}</p>
        <p>Tax Payment History: {user.taxPaymentHistory}</p>
        <p>Credit Card Usage: {user.creditCardUsage}</p>
        <p>Credit Score: {user.creditScore}</p>
      </>
    </CardLayout>
  );
};

export default DebtorCard;
