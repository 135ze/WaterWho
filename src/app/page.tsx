'use client'

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import {Navbar} from "./components/navbar"

import { api } from "~/trpc/react";
import styles from "./index.module.scss";
import { SignIn,  useUser } from "@clerk/nextjs";
import OnboardingApplication from "./[onboarding-application]/application";
import OnboardProgress from "./components/onboardprogress";

export default function Home() {
  noStore();

  return (
    <div>
      <OnboardingApplication/>
    </div>
  );
}
