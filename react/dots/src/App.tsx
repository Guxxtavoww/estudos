import React, { useCallback, useState } from "react";

import Dot from "./components/Dot";
import GlobalStyles from "./styles/global";

interface IDot {
  xLocation: number;
  yLocation: number;
}

const App: React.FC = () => {
  const [dots, setDots] = useState<IDot[]>([]);
  const [previousDot, setPreviousDot] = useState<IDot | undefined>(undefined);

  const handleAddDot = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { clientX: xLocation, clientY: yLocation } = event;

      setPreviousDot(undefined);

      setDots((prevState) => {
        const hasDotOnSameLocation = prevState.find(
          (dot) => dot.xLocation === xLocation && dot.yLocation === yLocation
        );

        if (hasDotOnSameLocation) return prevState;

        const newDot: IDot = { xLocation, yLocation };

        setPreviousDot(newDot);

        return [...prevState, newDot];
      });
    },
    []
  );

  const handleUndoDot = useCallback(() => {
    setDots(dots.filter((dot) => dot !== previousDot));
  }, [dots, previousDot]);

  const handleRedoDot = useCallback(() => {
    if (!previousDot) return;

    setDots((prevState) => [...prevState, previousDot]);
  }, [previousDot]);

  return (
    <>
      <div className="app_wrapper">
        <div className="dots_container" onClick={handleAddDot}>
          {dots.length &&
            dots.map((dot, index) => <Dot {...dot} key={index} />)}
        </div>
        <div className="controls_container">
          {previousDot && (
            <>
              <button onClick={handleUndoDot}>Desfazer</button>
              <button onClick={handleRedoDot}>Refazer</button>
            </>
          )}
        </div>
      </div>
      <GlobalStyles />
    </>
  );
};

export default App;
