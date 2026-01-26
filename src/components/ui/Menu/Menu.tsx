import { useState } from "react";
import {
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import type { IMenuOption } from "../../../shared/types/menu.types";

interface MenuProps {
  options?: IMenuOption[];
}

const defaultOptions: IMenuOption[] = [
  {
    label: "Profile",
    icon: <PersonIcon fontSize="small" />,
    onClick: () => console.log("Profile clicked"),
  },
  {
    label: "Settings",
    icon: <SettingsIcon fontSize="small" />,
    onClick: () => console.log("Settings clicked"),
  },
  {
    label: "Logout",
    icon: <LogoutIcon fontSize="small" />,
    onClick: () => console.log("Logout clicked"),
    divider: true,
  },
];

export function Menu({ options = defaultOptions }: Readonly<MenuProps>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: IMenuOption) => {
    option.onClick();
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          backgroundColor: open ? "var(--green-200)" : "var(--green-100)",
          color: "white",
          "&:hover": {
            backgroundColor: "var(--green-200)",
          },
        }}
      >
        <AccountCircleIcon />
      </IconButton>

      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            marginTop: "8px",
            minWidth: "200px",
            borderRadius: "8px",
          },
        }}
      >
        {options.map((option, index) => (
          <div key={option.label}>
            {option.divider && index > 0 && <Divider />}
            <MenuItem
              onClick={() => handleMenuItemClick(option)}
              sx={{
                padding: "10px 16px",
                "&:hover": {
                  backgroundColor: "var(--green-100)",
                  color: "white",
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
              }}
            >
              {option.icon && (
                <ListItemIcon
                  sx={{
                    minWidth: "36px",
                    color: "var(--green-100)",
                  }}
                >
                  {option.icon}
                </ListItemIcon>
              )}
              <ListItemText>{option.label}</ListItemText>
            </MenuItem>
          </div>
        ))}
      </MuiMenu>
    </>
  );
}
