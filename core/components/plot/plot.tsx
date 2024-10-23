import { PropsWithChildren, useContext } from "react";

import { CoordinateSystemContext } from "@core/contexts/coordinate-system.context";

export const Plot = ({ children }: PropsWithChildren) => {
  const { width, height, offsetX, offsetY } = useContext(
    CoordinateSystemContext
  );

  return (
    <svg
      className="h-full w-full"
      viewBox={`
      ${offsetX} 
      ${offsetY}
      ${width}
      ${height}
    `}
    >
      {children}
    </svg>
  );
};