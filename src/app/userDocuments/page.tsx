'use client'

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { api } from "~/trpc/react";
import styles from "./index.module.css";
import { SignIn,  useUser } from "@clerk/nextjs";

export default function Home() {
  noStore();

  return (
    <div>
      this is the users documents
    </div>
  );
}
