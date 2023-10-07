"use client";
import { FC } from "react";

export const Component: FC = () => {
  let anyObj: any;
  const foo = anyObj();

  const returnAnyFunc = () => {
    return anyObj;
  };

  returnAnyFunc();

  return (
    <div>
      {anyObj.hoge} {foo}
    </div>
  );
};
