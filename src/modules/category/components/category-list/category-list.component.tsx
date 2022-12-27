import { Datagrid, List, TextField } from 'react-admin';

export const CategoryList = () => {
  return (
    <List exporter={false}>
      <Datagrid rowClick="edit" bulkActionButtons={false}>
        <TextField source="title" label="Назва" />
      </Datagrid>
    </List>
  )
};