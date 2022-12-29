import { Create, SimpleForm, TextInput } from 'react-admin';

export const CategoryCreate = () => {
    return (
        <Create title="Створити категорію">
        <SimpleForm>
        <TextInput source="title" label="Назва" />
        <TextInput source="slug" label="Слаг" />
        </SimpleForm>
    </Create>
    )
};