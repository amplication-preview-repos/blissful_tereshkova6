import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProcurementOrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProcurementOrders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="orderDate" source="orderDate" />
        <TextField label="orderNumber" source="orderNumber" />
        <TextField label="supplierName" source="supplierName" />
        <TextField label="totalAmount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
