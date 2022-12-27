import { MenuCreate } from "./components/menu-create/menu-create.component";
import { MenuEdit } from "./components/menu-edit/menu-edit.component";
import { MenuList } from "./components/menu-list/menu-list.component";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export const menuResource = {
  name: 'menu',
  list: MenuList,
  edit: MenuEdit,
  create: MenuCreate,
  options: { label: 'Меню' },
  icon: RestaurantMenuIcon,
}