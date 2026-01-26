import { Box, Typography } from "@mui/material";

export function Books() {
  return (
    <Box
      sx={{
        padding: "24px",
        marginTop: "64px",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "16px", fontWeight: "bold" }}>
        Books 📚
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Here you will see all your books. Content coming soon!
      </Typography>
    </Box>
  );
}
