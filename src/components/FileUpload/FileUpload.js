import { useState } from "react"

const FileUpload =()=>{

    const [file, setFile] = useState();

    function handleOnChange(e){
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return(<>
        <input  type='file' onChange={handleOnChange}/>
        <img src={file} width="1000" height="800"/>
    </>)
}

export default FileUpload;