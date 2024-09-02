import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const InvoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="clientName" source="clientName" />
        <DateTimeInput label="invoiceDate" source="invoiceDate" />
        <TextInput label="invoiceNumber" source="invoiceNumber" />
      </SimpleForm>
    </Create>
  );
};
