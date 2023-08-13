import ProfileHeader from "@/components/shared/ProfileHeader";
import { fetchUser,  fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"

import { redirect } from "next/navigation";
import { profileTabs } from "@/constants";
import Image from "next/image";
import ThreadsTab from "@/components/shared/ThreadsTab";
import UserCard from "@/components/cards/UserCard";

// params is to get the id from the url
async function Page() {
    const user = await currentUser()

    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding")
  
    // Get activities 


    return (
      <section>
          <h1 className="head-text mb-10" >Activities</h1>
      </section>
    )
  }
  
  export default Page