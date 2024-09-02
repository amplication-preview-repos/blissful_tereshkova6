import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BudgetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="allocatedAmount" source="allocatedAmount" />
        <TextField label="budgetYear" source="budgetYear" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="utilizedAmount" source="utilizedAmount" />
      </SimpleShowLayout>
    </Show>
  );
};
