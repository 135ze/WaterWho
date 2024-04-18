'use client'

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { api } from "~/trpc/react";
import styles from "./index.module.css";
import { SignIn,  useUser } from "@clerk/nextjs";
import Onboarding from "./temp";

export default function Home() {
  noStore();

  return (
    <div>
      <Onboarding/>
    </div>
  );
}
