import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "clientName";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.clientName?.toString() || String(record.id);
};
