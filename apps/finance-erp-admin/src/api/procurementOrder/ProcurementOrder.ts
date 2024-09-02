export type ProcurementOrder = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderNumber: string | null;
  supplierName: string | null;
  totalAmount: number | null;
  updatedAt: Date;
};
