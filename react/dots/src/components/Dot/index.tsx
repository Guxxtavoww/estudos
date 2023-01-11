import React from "react";

import { DotContainer } from "./styles";

interface IDotProps {
  xLocation: number;
  yLocation: number;
}

const Dot: React.FC<IDotProps> = (props) => <DotContainer {...props} />;

export default Dot;
