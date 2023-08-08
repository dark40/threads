import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation";

async function Page() {
    const user = await currentUser()

    if (!user) return null;

    const userinfo = await fetchUser(user.id);

    if(!userinfo?.onboarded) redirect("/onboarding")

    return (
        <>
        <h1 className="head-text">Create Thread</h1>

        
        </>
        
    )
}

export default Page