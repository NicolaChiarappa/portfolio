import React from "react";

export const Paragraph1 = ({ color = "white02", children, style = "" }) => {
  return (
    <p className={"font-p text-p1 text-" + color + " " + style}>{children}</p>
  );
};

export const Paragraph2 = ({ color = "white02", children, style = "" }) => {
  return (
    <p className={"font-p text-p2 text-" + color + " " + style}>{children}</p>
  );
};

export const Paragraph3 = ({ color = "white02", children, style = "" }) => {
  return (
    <p className={"font-p text-p3 text-" + color + " " + style}>{children}</p>
  );
};
