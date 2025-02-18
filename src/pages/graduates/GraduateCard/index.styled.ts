import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import GraduateImage from "pages/graduates/components/GraduateImage";

export const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const StyledImageContainer = styled("div")(({ theme }) => {
  const gridLayoutMargin = theme.spacing(2);
  const graduateCardMargin = theme.spacing(1);
  const margin = `${gridLayoutMargin} * 2 + ${graduateCardMargin} * 2`;
  return {
    [theme.breakpoints.up("sm")]: {
      width: 282,
      height: 188,
    },
    [theme.breakpoints.down("sm")]: {
      width: `calc(100vw - (${margin}))`,
      height: `calc((100vw - (${margin})) * (2 / 3) )`,
    },
  };
});

export const StyledGraduateImage = styled(GraduateImage)({
  height: "100%",
  width: "100%",
});

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  "&:last-child": {
    paddingBottom: theme.spacing(1),
  },
}));

/**
 * innerHTML will be hidden
 * but this element still occupies space
 */
export const PlaceholderTypography = styled(Typography)({
  textIndent: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
});
