import { Admin, DataProvider, Loading, Resource } from "react-admin";
import { CssBaseline } from "@mui/material";
import React, { useState, useEffect } from 'react';
import buildHasuraProvider from 'ra-data-hasura';
import { apolloClient } from "./core/apollo-client";
import { i18nProvider } from "./core/i18n";
import { authProvider } from "./core/auth-provider";
import { theme } from "./core/theme";
import { MenuList } from "./modules/menu/components/menu-list/menu-list.component";
import { MenuEdit } from "./modules/menu/components/menu-edit/menu-edit.component";
import { MenuCreate } from "./modules/menu/components/menu-create/menu-create.component";
import { CategoryList } from "./modules/category/components/category-list/category-list.component";
import { CategoryEdit } from "./modules/category/components/category-edit/category-edit.component";
import { CategoryCreate } from "./modules/category/components/category-create/menu-create.component";


export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        client: apolloClient,
      });

      setDataProvider(dataProvider);
    };

    buildDataProvider();
  }, []);

  if (!dataProvider) {
    return <Loading />
  };

  return (
    <>
      <CssBaseline/>
      <Admin 
      dataProvider={dataProvider} 
      authProvider={authProvider} 
      i18nProvider={i18nProvider}
      requireAuth
      theme={theme}
      >
        <Resource
          name="menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
          options={{label: "Меню"}}
        />
        <Resource
          name="categories"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          options={{label: 'Категорії'}}
        />
      </Admin>
    </>
  );
}

