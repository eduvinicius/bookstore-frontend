import { Box } from "@mui/material";
import { Drawer } from "../ui/Drawer";
import { Menu } from "../ui/Menu";
import type { IMenuOption } from "../../shared/types/menu.types";
import { useNavigate } from "react-router-dom";

export function Header() {

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const menuOptions: IMenuOption[] = [
    { label: "My Account", onClick: () => { /* Logic for handling "My Account" action */ } },
    { label: "Sign Out", onClick: () => { /* Logic for handling "Sign Out" action */ }, divider: true }
  ];

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "64px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
        backgroundColor: "var(--gray-700)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 1100,
      }}
    >
      <Drawer onNavigate={handleNavigate} />

      <Box sx={{ marginLeft: "auto" }}>
        <Menu options={menuOptions} />
      </Box>
    </Box>
  );
}
