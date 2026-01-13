import { Button as MuiButton, type ButtonProps } from "@mui/material";

export type AppButtonVariant = "primary" | "secondary";

interface AppButtonProps extends Omit<ButtonProps, "variant" | "color"> {
  variant?: AppButtonVariant;
}

export function Button({
  variant = "primary",
  ...props
}: Readonly<AppButtonProps>) {
  return (
    <MuiButton
      {...props}
      disableElevation
      sx={{
        textTransform: "none",
        fontWeight: "var(--font-weight-bold)",
        borderRadius: "8px",
        padding: "8px 16px",

        ...(variant === "primary" && {
          backgroundColor: "var(--green-100)",
          color: "white",
          "&:hover": {
            backgroundColor: "var(--green-200)",
          },
        }),

        ...(variant === "secondary" && {
          backgroundColor: "var(--purple-100)",
          color: "white",
          "&:hover": {
            backgroundColor: "var(--purple-200)",
          },
        }),
      }}
    />
  );
}
