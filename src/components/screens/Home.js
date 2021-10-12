import React, { useState } from 'react'


const Home = () =>{
    const [file,setFile] = useState("")


    return(
    <div>
        <div className='card upload-file-card'>
            <div className = "file-field input-field">
                <h5 className="extrct-txt">Upload your PDF file to extract the key information</h5>
                    <div className="btn #4dd0e1 cyan lighten-2">
                        <span>Select File</span>
                        <input type="file" onChange = {(e)=>setFile(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
            </div>
        </div>
        <div className='card upload-file-card'>
        <textarea className="materialize-textarea" style={{height: "200px"}}></textarea>
        </div>
    </div>
    )
}

export default Home