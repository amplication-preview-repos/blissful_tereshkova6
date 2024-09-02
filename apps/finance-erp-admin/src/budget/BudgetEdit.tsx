import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const BudgetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="allocatedAmount" source="allocatedAmount" />
        <NumberInput step={1} label="budgetYear" source="budgetYear" />
        <NumberInput label="utilizedAmount" source="utilizedAmount" />
      </SimpleForm>
    </Edit>
  );
};
