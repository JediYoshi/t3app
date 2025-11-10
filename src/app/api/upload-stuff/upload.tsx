"use server";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import { revalidatePath } from 'next/cache';


export default async function uploadData(title: string, content: string): Promise<{message: string} | { error: string }> {
  try {
    // Insert the data into the database
    await db.insert(posts).values({ title, content });


    // Return a success message or the inserted data
    return { message: "Data uploaded successfully!"};
    revalidatePath('/posts');
  } catch (error) {
    console.error("Error uploading data:", error);
    return { error: "Failed to upload data." };
  }
}
