import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AssetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="assetName" source="assetName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="purchaseDate" source="purchaseDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
