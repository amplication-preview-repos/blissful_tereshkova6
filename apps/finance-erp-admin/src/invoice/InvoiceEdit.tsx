import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const InvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="clientName" source="clientName" />
        <DateTimeInput label="invoiceDate" source="invoiceDate" />
        <TextInput label="invoiceNumber" source="invoiceNumber" />
      </SimpleForm>
    </Edit>
  );
};
