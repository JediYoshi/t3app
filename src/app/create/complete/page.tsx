import Link from "next/link";

export default function pageCreateComplete() {
    return (
        <main className="">
            <div className="flex flex-wrap justify-center text-[100px] font-bold">Post Creation Complete</div>
            <div className="flex flex-wrap justify-center"><Link href="/posts"><div className="btn btn-info rounded-[6px]">Return to Posts</div></Link></div>
        </main>
    );
}
