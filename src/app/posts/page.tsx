import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import Link from "next/link";


export default async function pagePosts() {
    const data = await db.query.posts.findMany({
        columns: {
            content: true,
            title: true,
        },
    })
 
    return (
        <main className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-wrap justify-center w-full text-[100px] font-bold">Posts</div>
            <div className="flex flex-wrap justify-center w-full"><Link href="/create"><div className="btn btn-primary rounded-[6px]">Create Post</div></Link></div>
            <div className="grid grid-cols-1 gap-4">
                {data.map((data,index) => (
                    <div key={index} className="card w-96 bg-[#963992] shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">{data.title}</h2>
                            <p>{data.content}</p>
                            <div className="justify-end card-actions"></div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
