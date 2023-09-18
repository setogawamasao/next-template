"use client";
import styled from "styled-components";
import { useLoading } from "@/states/loadingStore";
import { MutatingDots, Oval } from "react-loader-spinner";
import { mainColor, subColor } from "./colorSettings";

export default function Loading() {
  const { isShow } = useLoading();

  if (!isShow) {
    return <></>;
  }
  return (
    <div
      style={{
        bottom: "0",
        left: "0",
        right: "0",
        top: "0",
        position: "absolute",
        background: "rgba(0, 0, 255, .8)",
      }}
    >
      <Oval
        height={80}
        width={80}
        color={mainColor}
        secondaryColor={subColor}
        wrapperStyle={{}}
        wrapperClass="loading"
        visible={true}
        ariaLabel="oval-loading"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
