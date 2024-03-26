export interface Investment {
  type: string;
  percentage: number;
  count: number;
}

export function isInvestor(user: User): user is Investor {
  return user.userType === 'investor';
}

export function isDebtor(user: User): user is Debtor {
  return user.userType === 'debtor';
}

interface BaseUser {
  userType: 'investor' | 'debtor' | 'general';
}

export interface Investor extends BaseUser {
  userType: 'investor';
  investments: Investment[];
  annualReturn: number;
  liquidAssets: number;
}

export interface Debtor extends BaseUser {
  userType: 'debtor';
  dueDate: string;
  annualRevenue: number;
  name: string;
  phoneNumber: string;
  accountNumber: string;
  address: string;
  taxPaymentHistory: string;
  creditCardUsage: string;
  creditScore: number;
}

interface GeneralUser extends BaseUser {
  userType: 'general';
  // General user-specific fields, if any
}

export type User = Investor | Debtor | GeneralUser;

// Example data
export const usersData: User[] = [
  
  {
    userType: 'investor',
    investments: [{ type: 'Stocks', percentage: 50, count: 10 }],
    annualReturn: 5,
    liquidAssets: 10000,
  },
  {
    userType: 'debtor',
    dueDate: '2023-12-31',
    annualRevenue: 50000,
    name: "John Doe",
    phoneNumber: "123-456-7890",
    accountNumber: "123456789",
    address: "123 Main St",
    taxPaymentHistory: "Up-to-date",
    creditCardUsage: "Moderate",
    creditScore: 700,
  },
  {
    userType: 'general',
    // Populate with general user fields if necessary
  }
];