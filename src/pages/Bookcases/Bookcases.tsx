import { Box, Typography } from "@mui/material";

export function Bookcases() {
  return (
    <Box
      sx={{
        padding: "24px",
        marginTop: "64px",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "16px", fontWeight: "bold" }}>
        Bookcases 🗄️
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Here you will manage your bookcases. Content coming soon!
      </Typography>
    </Box>
  );
}
