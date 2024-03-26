import React from 'react';
import { User, isDebtor, isInvestor } from './UserData';

interface BasicUserInfoProps {
  user: User;
}

const BasicUserInfo: React.FC<BasicUserInfoProps> = ({ user }) => {
  return (
    <div className="basic-user-info">
      <h2>기본 정보</h2>
      <p>유형: {user.userType === 'investor' ? '투자자' : user.userType === 'debtor' ? '채무자' : '일반 사용자'}</p>
      {isInvestor(user) && <p>유동 자산: ${user.liquidAssets.toLocaleString()}</p>}
      {isInvestor(user) && <p>연간 수익률: {user.annualReturn}%</p>}
      {isDebtor(user) && <p>연간 수익: ${user.annualRevenue.toLocaleString()}</p>}
    </div>
  );
};

export default BasicUserInfo;