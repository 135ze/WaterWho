'use client'

import React from 'react'
import styles from './OnboardProgress.module.scss'

interface OnboardProgressProps {
    currentStep: number;
}

const OnboardProgress = (props: OnboardProgressProps) => {
    const {currentStep} = props;

    let progress = {Basic_Info: "D9D9D9", Your_Posting: "D9D9D9", Complete: "D9D9D9"};
    switch (currentStep) {
        case 1:
            progress = {
                Basic_Info: "326096",
                Your_Posting: "D9D9D9",
                Complete: "D9D9D9"
            }
            break;
        case 2:
            progress = {
                Basic_Info: "67A3EB",
                Your_Posting: "326096",
                Complete: "D9D9D9"
            }
            break;
        case 3:
            progress = {
                Basic_Info: "67A3EB",
                Your_Posting: "67A3EB",
                Complete: "326096"
            }
            break;
    }

    const removeUnderscore = (str: string) => {
        return str.replace(/_/g, " ");
    }
            
    return (
        <section className={styles.container}>
            {
                Object.entries(progress).map(([k, v], index) => {
                    return (
                        <div style={{backgroundColor: `#${v}`, color: `#${v}`, borderColor: `#${v}`}} className={styles.wrapper} key={index}>
                            <p style={v === "D9D9D9" ? {color: "black"} : {color: "white"}} className={styles.text}>
                                {removeUnderscore(k)}
                            </p>
                        </div>
                    )
            })}
        </section>
    )
}

export default OnboardProgress