import _ from "lodash";
import { Link, Outlet } from "react-router-dom";
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
  // const [opened, { toggle }] = useDisclosure();

  return (  
    <div>
      <MantineProvider theme={theme}>
        <Header 
          menu={menu}
        />
        <div style={{paddingTop: '80px'}}>
          <Outlet />
        </div>
      </MantineProvider>
    </div>
  );
};

export default Layout;