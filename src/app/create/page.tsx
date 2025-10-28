"use client";
import { useState, useEffect } from "react";
import uploadData from "../api/upload-stuff/upload";
import { useRouter } from "next/navigation";


export default function pageCreate() {
  	//Sets up local variables for form submission.
  	const [title, setTitle] = useState(""); //In the []s, you see title and setTitle, title is the variable and setTitle will then be defined to update title whenever the function is called.
  	const [content, setContent] = useState(""); //Same as the line above except it replaces title with content.
    const router = useRouter();

    useEffect(() => {}, []); //Tells the client the form submission is ready.

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); //Prevents the browser from refreshing
        const result = await uploadData(title, content); //Sends the data from the text boxes to the API
        console.log(result); //Logs the result of the upload to the browser's log
        router.push("/create/complete"); //Redirects to the homepage
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-[6px]">
            <div className="flex flex-wrap w-full justify-center">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} //setTitle is called here when the input is updated (New Character, Backspace, ect.)
                    placeholder="Title"
                    required
                    className="bg-[#484848] rounded-[6px] w-2/3 text-[48px]"
                />
            </div>
            <div className="flex flex-wrap w-full justify-center">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)} //setContent is called here when the input is updated (New Character, Backspace, ect.)
                    placeholder="Content"
                    required
                    className="bg-[#484848] rounded-[6px] w-2/3"
                />
            </div>
            <div className="flex flex-wrap w-full justify-center">
                <button
                    type="submit"
                    className="btn btn-info rounded-[6px]"
                >
                    Upload
                </button>
            </div> 
        </form>
  ); //A button named that says upload is used to trigger a 'formEvent' which runs the handleSubmit function. Pressing enter in a text box also does this.
}
