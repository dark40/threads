"use server"

import { connectToDB } from "../mongoose";
import Thread from "../models/thread.model";
import User from "../models/user.model";
import { revalidatePath } from "next/cache";

interface Params {
    text: string,
    author: string,
    communityId: string | null,
    path: string,
}


export async function createThread({ text, author, communityId, path }: Params) {
    try {
        connectToDB()

        const createThread = await Thread.create({
            text,
            author,
            community: null,
        })

        // update user model
        await User.findByIdAndUpdate(author, {
            $push: { threads: createThread._id }
        })

        // make sure the change will happen immediately
        revalidatePath(path)

    } catch (error: any) {
        throw new Error(`Failed to create thread: ${error.message} `)
    }
}