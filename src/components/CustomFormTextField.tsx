import { InputBase, SxProps, Theme, } from "@mui/material";

interface CustomFormTextFieldProps {
    placeholder: string;
    sx?: SxProps<Theme>;
}

export function CustomFormTextField({ placeholder, sx }: CustomFormTextFieldProps) {
    return (
        <InputBase
            sx={{
                color: "white",
                border: "1px solid white",
                borderRadius: "6px",
                paddingLeft: "30px",
                height: "64px",
                ...sx
            }}
            placeholder={placeholder}
        />
    );
}