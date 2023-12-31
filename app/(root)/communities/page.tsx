import { currentUser } from "@clerk/nextjs"

import { redirect } from "next/navigation";

import { fetchCommunities } from "@/lib/actions/community.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import CommunityCard from "@/components/cards/CommunityCard";

// params is to get the id from the url
async function Page() {
    const user = await currentUser()
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding")
  
    // Fetch communities
    const results = await fetchCommunities({
        searchString: '',
        pageNumber: 1,
        pageSize: 25
    })

    return (
    <section>
        <h1 className="head-text mb-10" >Search</h1>

        {/* a search bar */}

        <div className="mt-14 flex flex-col gap-9"> 
            {results.communities.length === 0 ? (
                    <p className="no-result">No communities</p>
                ) : (
                    <>
                        {results.communities.map((community => (
                            <CommunityCard
                                key={community.id}
                                id={community.id}
                                name={community.name}
                                username={community.username} 
                                imgUrl={community.image}
                                bio={community.bio}
                                members={community.members}
                            />
                        )))}
                    </>
                )}

        </div>
    </section>
  )
}

export default Page