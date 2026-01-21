import { useState } from "react";
import {
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ROUTES, type Route } from "../../../shared/constants/routes";

interface DrawerProps {
  onNavigate?: (path: string) => void;
}

export function Drawer({ onNavigate }: Readonly<DrawerProps>) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleNavigate = (route: Route) => {
    if (onNavigate) {
      onNavigate(route.path);
    }
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1200,
          backgroundColor: "var(--green-100)",
          color: "white",
          "&:hover": {
            backgroundColor: "var(--green-200)",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <MuiDrawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 280,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
              backgroundColor: "var(--green-100)",
              color: "white",
            }}
          >
            <Box
              sx={{
                fontSize: "1.25rem",
                fontWeight: "var(--font-weight-bold)",
              }}
            >
              Bookstore
            </Box>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{
                color: "white",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          <List sx={{ flexGrow: 1 }}>
            {ROUTES.map((route) => (
              <ListItem key={route.path} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigate(route)}
                  sx={{
                    padding: "12px 24px",
                    "&:hover": {
                      backgroundColor: "var(--green-100)",
                      color: "white",
                    },
                  }}
                >
                  {route.icon && (
                    <Box sx={{ marginRight: "12px", fontSize: "1.25rem" }}>
                      {route.icon}
                    </Box>
                  )}
                  <ListItemText
                    primary={route.label}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </MuiDrawer>
    </>
  );
}
