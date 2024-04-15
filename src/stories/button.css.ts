import { style } from "@vanilla-extract/css";

export const storybookButton = style({
  fontFamily: "Nunito Sans , Helvetica Neue , Helvetica , Arial , sans-serif",
  fontWeight: "700",
  border: "0",
  borderRadius: "3em",
  cursor: "pointer",
  display: "inline-block",
  lineHeight: "1",
});

export const storybookButtonLarge = style({
  fontSize: "16px",
  padding: "12px 24px",
});

export const storybookButtonMedium = style({
  fontSize: "14px",
  padding: "11px 20px",
});

export const storybookButtonPrimary = style({
  color: "white",
  backgroundColor: "#1ea7fd",
});

export const storybookButtonSecondary = style({
  color: "#333",
  backgroundColor: "transparent",
  boxShadow: "rgba(0,0,0,0.15) 0px 0px 0px 1px inset",
});

export const storybookButtonSmall = style({
  fontSize: "12px",
  padding: "10px 16px",
});
