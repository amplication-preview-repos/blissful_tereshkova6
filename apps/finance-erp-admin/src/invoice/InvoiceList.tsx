import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InvoiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Invoices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <TextField label="clientName" source="clientName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="invoiceDate" source="invoiceDate" />
        <TextField label="invoiceNumber" source="invoiceNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
