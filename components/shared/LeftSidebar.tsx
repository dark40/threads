"use client"

import { sidebarLinks } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { SignedIn, SignOutButton, useAuth } from "@clerk/nextjs"

function LeftSidebar() {
    const router = useRouter()
    const pathname = usePathname()
    const {userId} = useAuth()

    return (
        <section className="custom-scrollbar leftsidebar">
            {/* sidebar top */}
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route

                    // this is to add the step for going into the user profile. /profile/:userId
                    if(link.route === '/profile') link.route =`${link.route}/${userId}`

                    // map the links to the sidebar
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}>
                            <Image
                                src={link.imgURL}
                                alt={link.label}
                                width={24}
                                height={24}
                            />
                            <p className="text-light-1 max-lg:hidden">{link.label}</p>
                        </Link>
                    )
                })}
            </div>

            {/* sidebar bottom, logout button */}
            <div className="mt-10 px-6">
                <SignedIn>
                    <SignOutButton signOutCallback={()=> router.push('/sign-in')}>
                        <div className="flex cursor-pointer gap-4 p-4">
                            <Image src='/assets/logout.svg' alt="logout" width={24} height={24} />
                            <p className="text-light-2 max-lg:hidden">Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>

            </div>


        </section>
    )
}

export default LeftSidebar