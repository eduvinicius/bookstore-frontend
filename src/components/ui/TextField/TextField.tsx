import { TextField as MuiTextField, type TextFieldProps } from "@mui/material";

export type AppTextFieldVariant = "primary" | "secondary";

interface AppTextFieldProps extends Omit<TextFieldProps, "variant"> {
  variant?: AppTextFieldVariant;
}

export function TextField({
  variant = "primary",
  ...props
}: Readonly<AppTextFieldProps>) {
  return (
    <MuiTextField
      {...props}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",

          ...(variant === "primary" && {
            "& fieldset": {
              borderColor: "var(--green-100)",
            },
            "&:hover fieldset": {
              borderColor: "var(--green-200)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--green-100)",
            },
          }),

          ...(variant === "secondary" && {
            "& fieldset": {
              borderColor: "var(--purple-100)",
            },
            "&:hover fieldset": {
              borderColor: "var(--purple-200)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--purple-100)",
            },
          }),
        },

        "& .MuiInputLabel-root": {
          ...(variant === "primary" && {
            "&.Mui-focused": {
              color: "var(--green-100)",
            },
          }),

          ...(variant === "secondary" && {
            "&.Mui-focused": {
              color: "var(--purple-100)",
            },
          }),
        },
      }}
    />
  );
}
