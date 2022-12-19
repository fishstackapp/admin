import { Admin, DataProvider, Loading, Resource } from "react-admin";
import { CssBaseline } from "@mui/material";
import React, { useState, useEffect } from 'react';
import buildHasuraProvider from 'ra-data-hasura';
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";
import { MenuEdit } from "@app/modules/menu/components/menu-edit/menu-edit.component";
import { MenuCreate } from "@app/modules/menu/components/menu-create/menu-create.component";
import { authProvider } from "@app/core/auth-provider";
import { apolloClient } from "@app/core/apollo-client";
import { theme } from "./core/theme";
import { i18nProvider } from "./core/i18n";


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
      </Admin>
    </>
  );
}

