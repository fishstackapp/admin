import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';
import { MenuEditTitle } from '@app/modules/menu/components/menu-edit-title/menu-edit-title.component';
import { CloudinaryInput } from '@app/common/components/cloudinary-input/cloudinary-input.component';

export const MenuEdit = () => {

    return (
        <Edit title={<MenuEditTitle />}>
            <SimpleForm>
                <TextInput source="title" fullWidth label="Назва"/>
                <CloudinaryInput source="image" label="Фото" />
                <TextInput source="image" fullWidth label="Фото"/>
                <TextInput source="descriptions" fullWidth label="Опис"/>
                <NumberInput source="price" label="Ціна в грн."/>
                <NumberInput source="weight" label="Вага в гр."/>
            </SimpleForm>
        </Edit>
    )
};