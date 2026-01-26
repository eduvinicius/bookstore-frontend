import { Box, Typography } from "@mui/material";

export function Home() {
  return (
    <Box
      sx={{
        padding: "24px",
        marginTop: "64px",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "16px", fontWeight: "bold" }}>
        Welcome to Bookstore
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is the home page. Content coming soon!
      </Typography>
    </Box>
  );
}
