import cn from "classnames";
import React, { FC } from "react";
import styles from "./alert.module.css";
interface Props {
  type: "success" | "error";
}
const Alert: FC<Props> = ({ type }) => {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      Alert
    </div>
  );
};

export default Alert;
