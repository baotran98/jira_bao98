import React from "react";
import { useSelector } from "react-redux";
import styleLoading from "./LoadingComponent.module.css";

export default function LoadingComponent() {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  if (isLoading) {
    return (
      <div className={styleLoading.bgLoading}>
        <img src={require("../../../assets/gif/loadingBG.gif")} height="500" />
      </div>
    );
  } else {
    return "";
  }
}