import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: "24px",
          width: "100%",
          height: "100%",
          display: "flex",
          fontWeight: 700,
          borderRadius: "50%",
          justifyContent: "center",
        }}
      >
        NC
      </div>
    ),
    { ...size }
  );
}
