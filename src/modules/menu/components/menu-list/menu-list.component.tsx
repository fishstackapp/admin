import { Menu } from '@app/core/types';
import { config } from '@app/core/config';
import { MenuListExpend } from '../menu-list-expand/menu-list-expand.component';
import { 
    Datagrid, 
    EditButton, 
    FunctionField, 
    List, 
    ReferenceField, 
    ReferenceInput, 
    SelectInput, 
    TextField, 
    TextInput 
} from 'react-admin';


const filters = [
    <TextInput source='title' label='Пошук по назві'/>,
    <ReferenceInput source='category_id' reference='categories' label='Категорія'>
        <SelectInput optionText='title' label='Категорія'/>
    </ReferenceInput>
]


export const MenuList = () => {
    return (
        <List filters={filters} exporter={false}>
            <Datagrid 
                expand={MenuListExpend} 
                rowClick="expand" 
                bulkActionButtons={false}
                isRowExpandable={(row: Menu) => 
                    row.category_id !== config.drinksCategoryId
                }
            >
                <TextField source="title" label="Назва"/>
                <ReferenceField 
                    source="category_id" 
                    reference="categories" 
                    link={false} 
                    label="Категорія"
                >
                    <TextField source="title"/>
                </ReferenceField>
                <FunctionField 
                    label="Ціна" 
                    render={(record: Menu) => `${record.price} грн`}
                />
                <EditButton />
            </Datagrid>
        </List>
    )
}