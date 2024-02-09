"use client";
import React, { useState } from "react";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { api } from "~/trpc/react";
import { SignIn, useUser } from "@clerk/nextjs";
import styles from "./Account.module.css";
import { DashboardMenu } from "../components/dashboardmenu"


export default function MainPage({ params }: { params: { id: string } }) {
  noStore();

  const [activeButton, setActiveButton] = useState<string>("Dashboard");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.accountContainer}>
        <h1 className={styles.accountHeader}>Welcome back, John!</h1>
        {/* Add in user name later based on login*/}
        <div className={styles.accountButtonsContainer}>
          <button
            onClick={() => handleButtonClick("Dashboard")}
            className={`${styles.accountButton} ${
              activeButton === "Dashboard"
                ? styles.activeButton
                : styles.accountButton
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => handleButtonClick("Interviews")}
            className={`${styles.accountButton} ${
              activeButton === "Interviews"
                ? styles.activeButton
                : styles.accountButton
            }`}
          >
            Interviews
          </button>
          <button
            onClick={() => handleButtonClick("Rankings")}
            className={`${styles.accountButton} ${
              activeButton === "Rankings"
                ? styles.activeButton
                : styles.accountButton
            }`}
          >
            Rankings
          </button>
          <button
            onClick={() => handleButtonClick("My Applications")}
            className={`${styles.accountButton} ${
              activeButton === "My Applications"
                ? styles.activeButton
                : styles.accountButton
            }`}
          >
            My Applications
          </button>
        </div>
        {activeButton === "Dashboard" && (
          <div>
          <DashboardMenu></DashboardMenu>
          </div>
        )}
        {activeButton === "Interviews" && (
          <div>
            <p>Interview Content HERE (TODO)</p>
          </div>
        )}
        {activeButton === "Rankings" && (
          <div>
            <p>Rankings Content HERE (TODO)</p>
          </div>
        )}
        {activeButton === "My Applications" && (
          <div>
            <p>Application Content HERE (TODO)</p>
          </div>
        )}
      </div>
    </div>
  );
}
