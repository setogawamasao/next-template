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
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        position: "absolute",
        // background: "rgba(0, 0, 255, .8)",
        zIndex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Oval
        height={80}
        width={80}
        color={mainColor}
        secondaryColor={subColor}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
