"use client"

import {HiOutlineTrash} from "react-icons/hi"
import { useRouter } from "next/router";

export default function RemoveBtn({id}){
    const router = useRouter();
    const removeTopic = async () =>{
        const confirmed = confirm('Are you  sure?');

        if (confirmed) {
         const res = await fetch(`https://localhost:3000/api/topics?id=${id}`,{
                method: "DELETE",
            })
        }
    };

    if(res.ok){
router.refresh()
    }
    return(
        <div>
           <button className="text-red-400">
            <HiOutlineTrash  size={24} />
           </button>
        </div>
         
    )
}