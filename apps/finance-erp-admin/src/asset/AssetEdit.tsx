import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="assetName" source="assetName" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
