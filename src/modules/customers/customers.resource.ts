import GroupIcon from '@mui/icons-material/Group';
import { CustomerList } from './components/customer-list/customer-list.component';
import { CustomerShow } from './components/customer-show/customer-show.component';

export const customerResource = {
  name: 'customers',
  list: CustomerList,
  show: CustomerShow,
  options: { label: 'Користувачі' },
  icon: GroupIcon,
}