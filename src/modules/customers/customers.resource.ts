import GroupIcon from '@mui/icons-material/Group';
import { CustomerList } from './components/customer-list/customer-list.component';

export const customerResource = {
  name: 'customers',
  list: CustomerList,
  options: { label: 'Користувачі' },
  icon: GroupIcon,
}