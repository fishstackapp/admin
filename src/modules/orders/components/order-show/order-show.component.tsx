import { Menu, Orders } from '@app/core/types';
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  FunctionField,
} from 'react-admin';

export const OrderShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <ReferenceField
          reference="order_status"
          source="status"
          label="Статус замовлення"
          link={false}
        >
          <TextField source="label" />
        </ReferenceField>
        <ReferenceField
          reference="payment_status"
          source="payment_status"
          label="Статус оплати"
          link={false}
        >
          <TextField source="label" />
        </ReferenceField>
        <FunctionField
          label="Загальна сума замовлення"
          source="sum"
          render={(record: Orders) => `${record.sum} грн`}
        />
        <ReferenceField reference="payment_types" source="payment_type" label="Оплата" link={false}>
          <TextField source="label" />
        </ReferenceField>
        <TextField source="client_name" label="Ім'я" />
        <TextField source="client_phone" label="Телефон" />
        <TextField source="client_address" label="Адреса" />
        <FunctionField
          source="comment"
          label="Коментар"
          render={(record: Orders) => record.comment ?? 'Коментар порожній'}
        />
        <ReferenceManyField reference="orders_menu" target="order_id" label="Список замовлення">
          <Datagrid bulkActionButtons={false} hover={false}>
            <ReferenceField reference="menu" source="menu_id" link={false} label="Назва">
              <TextField source="title" />
            </ReferenceField>
            <ReferenceField reference="menu" source="menu_id" link={false} label="Ціна">
              <FunctionField label="Ціна" render={(record: Menu) => `${record.price} грн`} />
            </ReferenceField>
            <TextField source="amount" label="Кількість" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
