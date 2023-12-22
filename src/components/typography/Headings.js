import React from "react";

export const Heading1 = ({ color = "white02", children, style = "" }) => {
  return (
    <h1 className={"font-h text-h1 text-" + color + " " + style}>{children}</h1>
  );
};

export const Heading2 = ({ color = "white02", children, style = "" }) => {
  return (
    <h2 className={"font-h text-h2 text-" + color + " " + style}>{children}</h2>
  );
};

export const Heading3 = ({ color = "white02", children, style = "" }) => {
  return (
    <h3 className={"font-h text-h3 text-" + color + " " + style}>{children}</h3>
  );
};
