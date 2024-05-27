import React, { useEffect, useState,useRef  } from 'react'
import axios from 'axios'

import $ from 'jquery'
function Upload({path}) {
  
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");

  const submitFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    const result = await axios.post(`http://localhost:5000/uploadFiles/${path}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    

    if (result.data.status === "ok") {
      alert("File Uploaded, Please Refresh the page to see the Updated Content.")
    }
  }

   const setters = (e) => {
    setTitle(e.target.files[0].name)
    setFile(e.target.files[0])
  }
  // useEffect(() => {
  //   $('#Upload').click(function () { $('#imgupload').trigger('click'); });
  // }, []);

  return (
    <div className='absolute bottom-0 right-0 '>
      <div className='flex justify-center items-center'>
        <form action="" className='p-5 flex justify-center items-center' onSubmit={submitFile}>
          <div className='flex flex-col items-center'>
            <div className="file-upload m-4 p-2" >
              <div className="image-upload-wrap">
                <input className="bg-gray-500 text-white " id='imgupload' type='file'  required onChange={(e) => setters(e)} accept='application/pdf'  />
              </div>
            </div>
            <button type='submit'  className=' border-2 font-bold p-3 w-fit ' >Upload Here</button>
          </div>

        </form>
      </div>


      

    </div>
  )
}

export default Upload
