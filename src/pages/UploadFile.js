import { useState } from "react";
import supabase from "../config/SupaBaseClient";

const UploadFile = ()=>{
    
    const [file,setFile]= useState(null)
    console.log(file);
    
    const UploadFile = async ()=>{
        if(!file){
            console.log("selecte file");
            return;
        }
    const {data,error}= await supabase.storage.from("Images").upload(`${Date.now()}`,file)
    if(data){
        console.log("file uploaded");
        setFile(null)
    }
    if(error){
        console.log(error);
    }
    }


return (
  <>
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
    
    <p className="text-2xl font-semibold text-gray-800 mb-6 text-center">
      Upload File
    </p>

    <label className="block w-full mb-6">
      <span className="sr-only">Choose file</span>
      <input
        type="file"
        className="block w-full text-sm text-gray-600
          file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-500 file:text-white
          hover:file:bg-blue-600
          cursor-pointer border border-gray-300 rounded-lg p-2"    
          onChange={(e)=>setFile(e.target.files[0])}
              />
    </label>
    <button
    disabled={!file}
className={`w-full font-semibold py-3 rounded-lg transition duration-200 shadow-md
    ${file
      ? "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }`}    onClick={UploadFile}
    >
      Upload
    </button>

  </div>
</div>
  </>
);
}
export default UploadFile;