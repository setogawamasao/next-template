"use client";
import { FC } from "react";

export const Component: FC = () => {
  let anyObj: any; //test2
  const foo = anyObj();

  const returnAnyFunc = () => {
    return anyObj;
  };

  returnAnyFunc();

  return (
    <div>
      {anyObj.noWord} {foo}
    </div>
  );
};
