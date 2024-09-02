import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FinancialAccountCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accountName" source="accountName" />
        <TextInput label="accountNumber" source="accountNumber" />
        <NumberInput label="balance" source="balance" />
      </SimpleForm>
    </Create>
  );
};
