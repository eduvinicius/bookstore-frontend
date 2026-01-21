import { Box } from "@mui/material";
import { Drawer } from "../ui/Drawer";
import { Menu, type MenuOption } from "../ui/Menu";

interface HeaderProps {
  onNavigate?: (path: string) => void;
  menuOptions?: MenuOption[];
}

export function Header({ onNavigate, menuOptions }: Readonly<HeaderProps>) {
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
      <Drawer onNavigate={onNavigate} />

      <Box sx={{ marginLeft: "auto" }}>
        <Menu options={menuOptions} />
      </Box>
    </Box>
  );
}
