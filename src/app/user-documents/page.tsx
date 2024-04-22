'use client'

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { Navbar } from "../components/navbar/navbar";

import { api } from "~/trpc/react";
import styles from "./index.module.css";
import { SignIn,  useUser } from "@clerk/nextjs";

import { BackToButton } from "../components/back-to-button/back-to-button";

export default function Home() {
  noStore();

  return (
    <div>
      this is the users documents
      <BackToButton></BackToButton>
    </div>
  );
}
