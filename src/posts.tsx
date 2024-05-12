import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  EditButton,
  Edit,
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from "react-admin";

const postFilters = [
  <TextInput key={1} source="q" label="Search" alwaysOn />,
  <ReferenceInput
    key={2}
    source="userId"
    label="User"
    reference="users"
    alwaysOn
  />,
];
export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" link="show" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `${record.title}` : ""}</span>;
};

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
