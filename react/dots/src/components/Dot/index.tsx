import React from "react";

import { DotContainer } from "./styles";

interface IDotProps {
  xLocation: number;
  yLocation: number;
}

const Dot: React.FC<IDotProps> = ({ xLocation, yLocation }) => (
  <DotContainer xLocation={xLocation} yLocation={yLocation} />
);

export default Dot;
