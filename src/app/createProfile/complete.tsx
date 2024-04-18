"use client"
import React from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./Complete.module.scss";
import { Tag } from "../components/tag";

interface CompleteProps {
    // WHEN USING FILES INSTEAD OF IMPORTED IMAGE, CHANGE TO FILE
    profilePic: StaticImageData;
    name: string;
    bio: string;
    tags: string[];
}

export default function OnboardingComplete(props: CompleteProps) {
  const { profilePic, name, bio, tags } = props;
  return (
    <main className={styles.container}>
      <h3 style={{ color: "white" }}>
        Congratulations! You’ve completed your profile! Time to start applying!
      </h3>
      <div className={styles.profileContainer}>
        <section className={styles.info}>
          <Image src={profilePic} alt="profile" className={styles.profilePic} height={120} width={120} />
          <div>
            <h3>{name}</h3>
            <p>{bio}</p>
          </div>
        </section>
        <section className={styles.tagsContainer}>
          {tags.map((tag, index) => {
            return <Tag key={index} tagString={tag} />;
          })}
        </section>
      </div>
    </main>
  );
}
