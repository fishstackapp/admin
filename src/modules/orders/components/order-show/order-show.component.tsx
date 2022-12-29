import { Menu, Orders } from '@app/core/types';
import { Show, SimpleShowLayout, TextField, ReferenceField, ReferenceManyField, Datagrid, FunctionField } from 'react-admin';

export const OrderShow = () => {
  return (
    <Show>
        <SimpleShowLayout>
          <FunctionField label="Загальна сума замовлення" source='sum' render={(record: Orders) => `${record.sum} грн`}/>
          <TextField source="client_name" label="Ім'я"/>
          <TextField source="client_phone" label="Телефон"/>
          <TextField source="client_address" label="Адреса"/>
          <ReferenceField 
            reference="order_status" 
            source='status' 
            label="Статус замовлення"
            link={false}
          >
            <TextField source="label" />
          </ReferenceField>
          <ReferenceManyField 
            reference="orders_menu" 
            target="order_id" 
            label="Список замовлення"
          >
            <Datagrid bulkActionButtons={false} header={<></>} hover={false}>
              <ReferenceField reference='menu' source='menu_id' link={false}>
                <TextField source="title"/>
              </ReferenceField>
              <ReferenceField reference='menu' source='menu_id' link={false}>
                <FunctionField label="Ціна" render={(record: Menu) => `${record.price} грн`}/>
              </ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
  )
};