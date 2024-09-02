import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const BudgetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="allocatedAmount" source="allocatedAmount" />
        <NumberInput step={1} label="budgetYear" source="budgetYear" />
        <NumberInput label="utilizedAmount" source="utilizedAmount" />
      </SimpleForm>
    </Create>
  );
};
