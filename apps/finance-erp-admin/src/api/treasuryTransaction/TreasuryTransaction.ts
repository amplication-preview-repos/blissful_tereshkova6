export type TreasuryTransaction = {
  amount: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  transactionDate: Date | null;
  transactionType?: "Option1" | null;
  updatedAt: Date;
};
