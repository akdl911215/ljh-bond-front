import React from 'react';
import { User, isInvestor } from './UserData'; // Adjust import paths as necessary
import { PieChartComponent } from './PieChartComponent'; // Make sure to import PieChartComponent
import CardLayout from './CardLayout';

interface InvestorCardProps {
  user: User;
}

export const InvestorCard: React.FC<InvestorCardProps> = ({ user }) => {
  if (!isInvestor(user)) {
    return null;
  }

  return (
    <CardLayout title="Investor Information" className="card-layout">
    <div className="card-content">
      {user.investments.map((investment, index) => (
        <p key={index}>{`${investment.type}: ${investment.percentage}% (${investment.count} units)`}</p>
      ))}
      <PieChartComponent investments={user.investments} />
        <p>Annual Return: {user.annualReturn}%</p>
        <p>Liquid Assets: ${user.liquidAssets.toLocaleString()}</p>
    </div>
  </CardLayout>
  );
};

export default InvestorCard;
