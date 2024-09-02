import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="generatedBy" source="generatedBy" />
        <TextInput label="reportContent" multiline source="reportContent" />
        <DateTimeInput label="reportDate" source="reportDate" />
      </SimpleForm>
    </Create>
  );
};
