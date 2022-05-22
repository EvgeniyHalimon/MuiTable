import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 17,
  height: 16,
  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(70, 79, 96, 0.16), 0px 2px 5px rgba(89, 96, 120, 0.1)',
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2
  },
  "input:hover ~ &": {
    backgroundColor: "#f4f4f4"
  }
}));

const BpCheckedIcon = styled(BpIcon)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  backgroundColor: "white",
  "&:before": {
    display: "flex",
    justifeContent: "center",
    alignItems: "center",
    width: 11,
    height: 10,
    borderRadius: "2px",
    background: "#eb7274",
    content: '""'
  },
  "input:hover ~ &": {
    backgroundColor: "white"
  }
});


export const CustomCheckbox = (props: CheckboxProps) => {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" }
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}