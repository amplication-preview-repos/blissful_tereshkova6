import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="position" source="position" />
        <TextInput label="surname" source="surname" />
      </SimpleForm>
    </Create>
  );
};
