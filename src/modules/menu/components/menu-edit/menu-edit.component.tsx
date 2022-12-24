import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.component";
import { MenuEditTitle } from "../menu-edit-title/menu-edit-title.component";

export const MenuEdit = () => {

    return (
        <Edit title={<MenuEditTitle />} mutationMode="pessimistic">
            <SimpleForm>
                <TextInput source="title" fullWidth label="Назва"/>
                <CloudinaryInput source="image" label="Фото" />
                <TextInput source="descriptions" fullWidth label="Опис"/>
                <NumberInput source="price" label="Ціна в грн."/>
                <NumberInput source="weight" label="Вага в гр."/>
            </SimpleForm>
        </Edit>
    )
};