'use client'

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import {Navbar} from "./components/navbar"

import { api } from "~/trpc/react";
import styles from "./index.module.scss";
import { SignIn,  useUser } from "@clerk/nextjs";

export default function Home() {
  noStore();

  return (
    <div>
      this is the landing page.
    </div>
  );
}
