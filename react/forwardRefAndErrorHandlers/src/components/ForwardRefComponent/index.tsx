import React, { forwardRef, memo } from 'react';

interface iForwardRefComponentProps {
  children?: React.ReactNode;
  name: string;
}

const ForwardRefComponent = forwardRef<
  HTMLInputElement,
  iForwardRefComponentProps
>((props, ref) => {
  return (
    <div className="input-wrapper">
      <input name={props.name} ref={ref} />
    </div>
  );
});

export default memo(ForwardRefComponent);
