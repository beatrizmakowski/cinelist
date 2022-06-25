import { Paper } from "@mui/material";


export function CustomPaper(props:any) {
    return (
        <Paper
            sx={{
                borderRadius: "28px",
                backgroundColor: "rgba(18, 15, 51, 0.95)",
                color: "white",
                padding: "43px 60px 49px 49px",
                width: "524px",
            }}
            elevation={1}
        >
             {props.children}
        </Paper>
    );
}