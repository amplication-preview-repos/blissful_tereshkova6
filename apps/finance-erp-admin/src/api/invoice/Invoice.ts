export type Invoice = {
  amount: number | null;
  clientName: string | null;
  createdAt: Date;
  id: string;
  invoiceDate: Date | null;
  invoiceNumber: string | null;
  updatedAt: Date;
};
