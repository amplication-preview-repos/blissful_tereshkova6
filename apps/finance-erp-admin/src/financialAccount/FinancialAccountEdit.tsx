import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FinancialAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="accountName" source="accountName" />
        <TextInput label="accountNumber" source="accountNumber" />
        <NumberInput label="balance" source="balance" />
      </SimpleForm>
    </Edit>
  );
};
