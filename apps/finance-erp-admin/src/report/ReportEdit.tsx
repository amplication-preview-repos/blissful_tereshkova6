import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="generatedBy" source="generatedBy" />
        <TextInput label="reportContent" multiline source="reportContent" />
        <DateTimeInput label="reportDate" source="reportDate" />
      </SimpleForm>
    </Edit>
  );
};
