import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
const imgHeight = 100

export const StyledContainer = styled(Stack)(() => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0",
    "& h6": { textTransform: "uppercase" },
    "& .img_ispm": {
        width: `${imgHeight}px`,
        background: "#ededed",
        borderRadius: "50%",
        padding: "15px",
        boxSizing: "border-box",
    },
}))