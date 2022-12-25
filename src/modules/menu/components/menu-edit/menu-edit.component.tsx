import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.component";
import { EditTitle } from "@app/common/components/edit-title/edit-title.component";

export const MenuEdit = () => {

    return (
        <Edit title={<EditTitle source="title"/>} mutationMode="pessimistic">
            <SimpleForm>
                <TextInput source="title" fullWidth label="Назва"/>
                <ReferenceInput source="category_id" reference="categories">
                    <SelectInput optionText="title" label="Категорія"/>
                </ReferenceInput>
                <CloudinaryInput source="image" label="Фото" />
                <TextInput source="descriptions" fullWidth label="Опис"/>
                <NumberInput source="price" label="Ціна в грн."/>
                <NumberInput source="weight" label="Вага в гр."/>
            </SimpleForm>
        </Edit>
    )
};