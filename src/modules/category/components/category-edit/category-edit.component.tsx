import { CustomTitle } from '@app/common/components/custom-title/custom-title.component';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const CategoryEdit = () => {
    return (
        <Edit title={<CustomTitle source="title" />} mutationMode="pessimistic">
            <SimpleForm>
                <TextInput source="title" label="Назва" />
                <TextInput source="slug" label="Слаг" />
            </SimpleForm>
        </Edit>
    )
};