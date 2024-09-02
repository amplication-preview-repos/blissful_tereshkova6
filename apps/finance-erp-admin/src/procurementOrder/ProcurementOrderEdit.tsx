import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProcurementOrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="orderDate" source="orderDate" />
        <TextInput label="orderNumber" source="orderNumber" />
        <TextInput label="supplierName" source="supplierName" />
        <NumberInput label="totalAmount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};
