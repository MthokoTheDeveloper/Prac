export default function EditTopicForm() {
    return (
        <form className="flex flex-col gap-3">
        <input 
        className="border
         bg-slate-500 px-8 py-2" type="text" 
         placeholder="Topic Tittle" />

    <input 
        className="border
         bg-slate-500 px-8 py-2" type="text" 
         placeholder="Topic Description" />

         <button className="bg-green-600 font-bold text-white
         py-3 px-6 w-fit">
            Update Topic
         </button>
    </form>
    );
}