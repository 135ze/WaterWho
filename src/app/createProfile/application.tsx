"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from "./Application.module.scss";
import Image from "next/image";
import { Navbar } from "../components/navbar";
import OnboardProgress from "../components/onboardprogress";
import { useDropzone } from "react-dropzone";

import remove from "../assets/remove.png";
import add from "../assets/add.png";

function AboutQuestion(props: {
  label: string;
  placeholder: string;
  multiline?: boolean;
  onChange: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  const { label, placeholder, multiline, onChange } = props;
  return (
    <div className={styles.question}>
      <label className={styles.label}>{label}</label>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          className={styles.textarea}
          onChange={onChange}
        />
      ) : (
        <input
          placeholder={placeholder}
          className={styles.input}
          type={"text"}
          onChange={onChange}
        />
      )}
    </div>
  );
}
function ImageDrop(props: { file: File | undefined; onClick: () => void }) {
  const { file, onClick } = props;

  return (
    <div>
      {file && (
        <Image
          src={URL.createObjectURL(file)}
          alt={file.name}
          onClick={() => onClick()}
          layout="fill"
          objectFit="contain"
        />
      )}
    </div>
  );
}

export default function OnboardingApplication(props: {handleNext: () => void}) {
  const { handleNext } = props;
  const [about, setAbout] = useState({
    employer: "",
    benefits: "",
    position: "",
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [expandedImage, setExpandedImage] = useState<File | undefined>(
    undefined
  );

  useEffect(() => {
    console.log(about);
  }, [about]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    if (acceptedFiles.length > 6) {
      acceptedFiles = acceptedFiles.slice(0, 6);
    }
    setPhotos((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxSize: 1920 * 1080,
  });

  const removeFile = (file: File | undefined) => () => {
    setPhotos((prev) => prev.filter((f) => f !== file));
  };

  return (
    <>
      <section className={styles.containers}>
        <p className={styles.subheading}>
          Let&apos;s fill out details for your relationship posting!
        </p>
        <div className={styles.columns}>
          <AboutQuestion
            label="About the Employer"
            placeholder="Talk about yourself!"
            multiline={true}
            onChange={(e) => setAbout({ ...about, employer: e.target.value })}
          />
          <AboutQuestion
            label="Benefits and Compensation"
            placeholder="What do you have to offer?"
            multiline={true}
            onChange={(e) => setAbout({ ...about, benefits: e.target.value })}
          />
          <AboutQuestion
            label="Position Start Date & Duration"
            placeholder="What’s your relationship style? What kind of person are you looking for?"
            multiline={true}
            onChange={(e) => setAbout({ ...about, position: e.target.value })}
          />
        </div>
      </section>

      <section className={styles.containers}>
        <p className={styles.subheading}>
          Choose the 6 photos that best showcase your personality!
        </p>
        <div className={styles.photosContainer}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              {photos[index] ? (
                <div className={styles.photo}>
                  <Image
                    src={remove}
                    alt="remove"
                    onClick={removeFile(photos[index])}
                    className={styles.removeButton}
                  />
                  <ImageDrop
                    file={photos[index]}
                    onClick={() => {
                      setExpandedImage(photos[index]);
                    }}
                  />
                </div>
              ) : (
                <div key={index} {...getRootProps()}>
                  <div className={styles.noPhoto}>
                    <Image
                      src={add}
                      alt="add"
                      objectFit="contain"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {expandedImage && (
          <div
            className={styles.expandContainer}
            onClick={() => setExpandedImage(undefined)}
          >
            <div
              className={styles.expandImage}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={remove}
                alt="remove"
                onClick={() => setExpandedImage(undefined)}
                className={styles.removeButton}
              />
              <Image
                src={URL.createObjectURL(expandedImage)}
                alt={expandedImage.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        )}
      </section>
      <section className={styles.containers}>
        <p className={styles.subheading}>
          What would the ideal candidate look like?
        </p>
        <div className={styles.columns}>
          <AboutQuestion
            label="Interests"
            placeholder="List out the things you enjoy!"
            onChange={(e) => setAbout({ ...about, employer: e.target.value })}
          />
          <AboutQuestion
            label="Dealbreakers"
            placeholder="List out the things you cannot tolerate!"
            onChange={(e) => setAbout({ ...about, benefits: e.target.value })}
          />
          <AboutQuestion
            label="Relationship Expectations"
            placeholder="Talk about your dating style!"
            onChange={(e) => setAbout({ ...about, position: e.target.value })}
          />
          <AboutQuestion
            label="Desired Traits"
            placeholder="List out the things you look for in a person!"
            onChange={(e) => setAbout({ ...about, position: e.target.value })}
          />
        </div>
      </section>

      <button onClick={() => handleNext()}>Next</button>
    </>
  );
}
