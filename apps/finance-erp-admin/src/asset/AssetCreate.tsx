import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="assetName" source="assetName" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
