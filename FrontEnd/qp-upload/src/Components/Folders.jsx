import React, { useState, useEffect ,useRef } from 'react';
import axios from 'axios';
import File from './File';
import Upload from './Upload';
import Breadcrum from './Breadcrum';
import { useContext } from 'react';
import MyContext from './Context';

function Folders() {

  const {isLoggedIn} = useContext(MyContext)
  const [path, setPath] = useState('/');
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, [path]);

  const fetchFiles = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/files${path}`);
      setFiles(response.data.fileList);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const openFolder = (name) => {
    setPath(`${path}${name}/`);
  };

  const back = () => {
    let p = path.split('/');
    console.log(p)
    p.pop();
    if (p.pop() !== '') {
      p.push('')
    }
    setPath(p.join('/'));
  };

  return (
    <>
    {isLoggedIn ? (
      <div className='relative top-0 left-0 p-4 hupload'>
        <ul className='flex items-center'>
          {path !== '/' && (
            <li>
              <button onClick={back} className='mt-20 mr-3'>
                <img
                  src="https://1001freedownloads.s3.amazonaws.com/icon/thumb/215/back-512.png"
                  width={20}
                  height={20}
                  alt="Back"
                />
              </button>
            </li>
          )}
          <li><Breadcrum path={path} /></li>
        </ul>
        <ul className='flex m-10'>
          {files.map((file) => (
            <li key={file.name}>
              {file.type === 'folder' ? (
                <div className='flex flex-grow-0'>
                  <div className='flex flex-col justify-center items-center shadow-2xl rounded-2xl w- cursor-pointer max-w-56'>
                    <img
                      src="https://static-00.iconduck.com/assets.00/folder-icon-2048x1638-vinzc398.png"
                      alt=""
                      className='mb-0 w-24 p-4 leading-3'
                      onClick={() => openFolder(file.name)}
                    />
                    <p className='text-lg text-black font-bold p-4 mt-0'>{file.name}</p>
                  </div>
                </div>
              ) : (
                <File name={file.name} fileId={`${path}/${file.name}`} />
              )}
            </li>
          ))}
        </ul>
        <Upload path={path} onUploadSuccess={fetchFiles} />
      </div>
    ) : (
      <div className='flex justify-center items-center font-bold text-3xl'>
        <p>Please log in to view folders.</p>
        {alert('Please Login')}
      </div>
    )}
  </>
);
}

export default Folders;
