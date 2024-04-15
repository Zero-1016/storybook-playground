import { globalStyle, style } from "@vanilla-extract/css";

export const welcome = style({
  color: "#333",
  fontSize: "14px",
  marginRight: "10px",
});

export const wrapper = style({
  fontFamily: "Nunito Sans , Helvetica Neue , Helvetica , Arial , sans-serif",
  borderBottom: "1px solid rgba(0,0,0,0.1)",
  padding: "15px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

globalStyle("button + button", {
  marginLeft: "10px",
});

globalStyle("h1", {
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "1",
  margin: "6px 0 6px 10px",
  display: "inline-block",
  verticalAlign: "top",
});

globalStyle("svg", {
  display: "inline-block",
  verticalAlign: "top",
});
