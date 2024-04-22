import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

export default function TopicsList() {
    return (
        <>
        <div className="p-4 border border-slate-300 my-3 flex justify-between items-start">
           <div>
            <h2>Topic Title</h2>
            <div>Topic Description</div>
           </div>

           <div className="flex gap-2">
            <RemoveBtn />
            <Link href={"/editTopic"} >
                <HiPencilAlt size={24}/>
            </Link>

           </div>
        </div>
        </>
    );
}
