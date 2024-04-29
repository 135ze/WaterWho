"use client";

import { api } from "~/trpc/react";
import { SignIn, useUser } from "@clerk/nextjs";
import CreateProfile from "../create-profile/page";
import Home from "../home/page";


export default function Signin() {
    const { user } = useUser();

    let userProfile
    if (user?.id) {
      userProfile = api.profile.getProfile.useQuery({UserID: user?.id}).data
    }

    return (
        <div>
            {userProfile === null ? 
                <CreateProfile /> : 
                <Home params={{id: user?.id}} />
            }
        </div>
    );
}