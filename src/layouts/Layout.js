import _ from "lodash";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MantineProvider, createTheme, AppShell, Group, UnstyledButton, Menu, Image } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

import Header from "../components/header";

import "../layouts/Layout.scss";
import menu from "../utils/menu";

const theme = createTheme({
  fontFamily: '"Noto Sans TC", sans-serif', 
  primaryColor: 'indigo'
});

const Layout = () => {
  const location = useLocation();
  const isLoginPage = _.includes(location.pathname, 'login');

  return (  
    <div className="Layout">
      <MantineProvider theme={theme}>
        <Header 
          menu={menu}
        />
        <div 
          style={{
            paddingTop: isLoginPage ? '0px' : '80px'
          }}
        >
          <Outlet />
        </div>
      </MantineProvider>
    </div>
  );
};

export default Layout;