'use client'

import React from 'react'
import styles from 'Application.module.scss'
import { Navbar } from '../components/navbar'
import { Menu } from '../components/menu'
import { BrowseCard } from '../components/browseCard'

export default function OnboardingApplication(){
  return (
    <>
    <Navbar />
    <BrowseCard/>
    <div>
        <h1>Onboarding Application</h1>
    </div>
    </>
  )
}