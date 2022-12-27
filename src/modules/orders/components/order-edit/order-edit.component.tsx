import { ManyToManyInput } from '@app/common/components/many-to-many-input/many-to-many-input.component';
import { useManyToManyInput } from '@app/common/hooks/use-many-to-many-input.hook';
import { OrderForm } from '../../order.types';
import {
  SelectInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { Order_Status_Enum } from '@app/core/types';


export const OrderEdit = () => {
  const {mutateJoinResource, fieldsProps} = useManyToManyInput({
    joinResource: 'orders_menu',
    resourceField: 'orders_id',
    referenceField: 'menu_id',
  })

  const transform = async (data: OrderForm) => {
    await mutateJoinResource({
      id: data.id, 
      newReferences: data.joined_orders_menu,
    })
    return data;
  };

  return (
    <Edit mutationMode="pessimistic" transform={transform}>
      <SimpleForm>
        <TextInput source="client_name" label="Ім'я" />
        <TextInput source="client_phone" label="Телефон" />
        <TextInput source="client_address" label="Адреса" fullWidth={true} />
        <ReferenceInput source="status" reference="order_status">
          <SelectInput 
            optionText="label" 
            label="Статус замовлення" 
            defaultValue={Order_Status_Enum.New}
          />
        </ReferenceInput>
        <ManyToManyInput
          label="Меню"
          reference="menu"
          source="joined_orders_menu"
          {...fieldsProps}
        />
      </SimpleForm>
    </Edit>
  );
};
