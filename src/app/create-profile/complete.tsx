"use client"
import React from "react";
import Image from "next/image";
import styles from "./Complete.module.scss";
import buttonStyles from "./Basic-Info.module.scss";
import { Tag } from "../components/dashboard/tag";
import { useRouter } from 'next/navigation';
import defaultPiplup from "../assets/sadpiplup.jpeg"

interface CompleteProps {
    profilePic: File | null;
    name: string;
    bio: string;
    tags: string[];
    handleBack: () => void;
}

// This is the last 'page' of the onBoarding page
export default function OnboardingComplete(props: CompleteProps) {
  const { profilePic, name, bio, tags, handleBack } = props;
  const router = useRouter();
  return (
    <>
    <main className={styles.container}>
      <h3 style={{ color: "white" }}>
        Congratulations! You’ve completed your profile! Time to start applying!
      </h3>
      <div className={styles.profileContainer}>
        <section className={styles.info}>
          {profilePic ? (
              <Image src={URL.createObjectURL(profilePic)} alt="profile" className={styles.profilePic} height={120} width={120} />
            ) : (
              <Image src={defaultPiplup} alt="profile" className={styles.profilePic} height={120} width={120} />
            )}
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
    </>
  );
}
