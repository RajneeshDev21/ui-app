import React, { useState, useRef } from 'react';

const FileInput = ()=>{

    const refInput = useRef(null);

    const BrowseFile =()=>{
        refInput.current.click();
    }
 
    return(
        <>
            <button onClick={BrowseFile}>BrowseFile</button>
            <input type={'file'} ref={refInput} style={{display:'none'}}/>

            <img src={refInput}/>
        </>
    )
}

export default FileInput;