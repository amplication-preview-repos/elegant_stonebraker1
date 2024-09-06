import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { GIG_TITLE_FIELD } from "../gig/GigTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Gig" source="gig.id" reference="Gig">
          <TextField source={GIG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
