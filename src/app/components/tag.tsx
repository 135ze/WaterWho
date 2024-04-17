'use client'
import React from "react";
import styles from "./Tags.module.scss";
interface TagProps {
  tagString: string;
}

export function Tag({ tagString }: TagProps) {
  const formattedTagString = tagString.replace(/_/g, " ");
  return (
    <div
      className={`border border-black my-2 mx-2  rounded-4 ${styles[tagString]}`}
    >
      <p className={`m-0 mx-2`}>{formattedTagString}</p>
    </div>
  );
}
