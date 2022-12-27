import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { OrderEdit } from './components/order-edit/order-edit.component';
import { OrderList } from './components/order-list/order-list.component';
import { OrderShow } from './components/order-show/order-show.component';
import { OrderCreate } from './components/order-create/order-create.component';

export const ordersResource = {
  name: 'orders',
  list: OrderList,
  show: OrderShow,
  edit: OrderEdit,
  create: OrderCreate,
  options: { label: 'Замовлення' },
  icon: ShoppingBagIcon,
}