"use client";

import { unstable_noStore as noStore } from "next/cache";
import BasicInfo from "./basic-info";
import Link from "next/link";
import { Navbar } from "../components/navbar/navbar";

import { api } from "~/trpc/react";
import styles from "./index.module.css";
import { SignIn, useUser } from "@clerk/nextjs";

export default function Home() {
  noStore();

  return (
    <div>
      <Navbar></Navbar>
      <BasicInfo></BasicInfo>
    </div>
  );
}
