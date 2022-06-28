import { Box, FormHelperText, InputBase, SxProps, Theme } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface CustomFormTextFieldProps {
  placeholder: string;
  sx?: SxProps<Theme>;
  control: Control<any, object>;
  name: string;
  type?: string;
}

export function CustomFormTextField({
  control,
  name,
  placeholder,
  sx,
  type
}: CustomFormTextFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Box>
          <InputBase
            fullWidth
            sx={{
              color: "white",
              border: `1px solid ${!!error ? "red" : "white"}`,
              borderRadius: "6px",
              paddingLeft: "30px",
              height: "64px",
              ...sx,
            }}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
          />
          {!!error && (
            <FormHelperText sx={{ color: "red", marginTop: 0 }}>
              {error.message}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
}
