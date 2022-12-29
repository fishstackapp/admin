import { CategoryCreate } from './components/category-create/menu-create.component';
import { CategoryEdit } from './components/category-edit/category-edit.component';
import { CategoryList } from './components/category-list/category-list.component';
import CategoryIcon from '@mui/icons-material/Category';

export const categoryResource = {
  name: 'categories',
  list: CategoryList,
  edit: CategoryEdit,
  create: CategoryCreate,
  options: { label: 'Категорії' },
  icon: CategoryIcon,
}