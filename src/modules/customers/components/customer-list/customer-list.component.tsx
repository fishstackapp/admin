import { Datagrid, List, TextField } from 'react-admin';

export const CustomerList = () => (
    <List exporter={false}>
        <Datagrid bulkActionButtons={false}>
            <TextField source="name" label="Ім'я"/>
            <TextField source="phone" label="Телефон"/>
            <TextField source="address" label="Адреса"/>
        </Datagrid>
    </List>
);