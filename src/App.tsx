import { Admin, CustomRoutes, DataProvider, Loading, Resource } from 'react-admin';
import { CssBaseline } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { authProvider } from './core/auth-provider';
import { theme } from './core/theme';
import { i18nProvider } from './core/i18n';
import { SettingEdit } from './modules/setting/components/setting-edit/setting-edit.component';
import { Route } from 'react-router-dom';
import { Layout } from './common/components/layout/layout.component';
import { buildDataProvider } from './core/data-provider';
import { menuResource } from './modules/menu/menu.resource';
import { categoryResource } from './modules/category/category.resource';
import { ordersResource } from './modules/orders/orders.resource';
import { useGetSettingsQuery } from './core/types';
import { DashBoard } from './modules/dashboard/components/dashboard/dashboard.component';
import { customerResource } from './modules/customers/customers.resource';
import OneSignalReact from 'react-onesignal';

export const App = () => {
  const {data: settings} = useGetSettingsQuery();


  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null);

  useEffect(() => {
    const getdDataProvider = async () => {
      const dataProvider = await buildDataProvider();

      setDataProvider(dataProvider);
    };

    getdDataProvider();
  }, []);

  useEffect(() => {
    OneSignalReact.init({appId: "536ae661-1045-4dac-8254-77ef4b65a420"})
  },[])

  if (!dataProvider || !settings) {
    return <Loading />;
  }

  return (
    <>
      <CssBaseline />
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        requireAuth
        theme={theme}
        layout={Layout}
        dashboard={DashBoard}
      >
        <Resource {...menuResource} />
        <Resource {...categoryResource} />
        <Resource {...ordersResource} />
        <Resource {...customerResource} />
        <Resource name="settings" />
        <Resource name="order_status" />
        <Resource name="orders_menu" />
        <Resource name="last_week_orders" />
        <CustomRoutes>
          <Route path="/settings" element={<SettingEdit />} />
        </CustomRoutes>
      </Admin>
    </>
  );
};
