import { NavLink, Outlet } from "react-router-dom";
import { AppShell, Burger, Group, UnstyledButton, Menu, Image } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

import "../layouts/Layout.scss";
import logo from "../assets/logo.png";



const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (  
    <div>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Group justify="space-between" style={{ flex: 1 }}>
              <Image 
                h={50}
                w="auto"
                radius={"md"}
                src={logo}
              />
              <Group ml="xl" gap={0} visibleFrom="sm">
                <NavLink to="Home" className="link"><UnstyledButton className="control">Home</UnstyledButton></NavLink>
                <NavLink to="Professor" className="link"><UnstyledButton UnstyledButton className="control">Professor</UnstyledButton></NavLink>
                <Menu trigger="hover" openDelay={100} closeDelay={100} shadow="md" width={200} className="link">
                  <Menu.Target>
                    <UnstyledButton className="control">Achievement</UnstyledButton>
                  </Menu.Target>
                  <Menu.Dropdown>

                    <NavLink to="Achievement/Award" className="link"><Menu.Item>Award</Menu.Item></NavLink>
                    <NavLink to="Achievement/Topic" className="link"><Menu.Item>Topic</Menu.Item></NavLink>
                  </Menu.Dropdown>
                </Menu>
                <NavLink to="Activity" className="link"><UnstyledButton className="control">Activity</UnstyledButton></NavLink>
                <NavLink to="Auth/Login" className="link"><UnstyledButton className="control">Login</UnstyledButton></NavLink>
              </Group>
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </div>
  );
};

export default Layout;