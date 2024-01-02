import React, { useState } from 'react';
import DownloadButton from './DownloadButton';
import { VscRefresh } from "react-icons/vsc";

export default function EditorHeader( {setFont}) {

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <>
            <div className='editor-header-left'>
                <div className='download-button-default'>
                    <DownloadButton />
                    <button className='refresh' onClick={refreshPage}><VscRefresh /></button>
                </div>

                <div>
                    <button className='fnt-btn' onClick={() => setFont('font1')}> Font1 </button>
                    <button className='fnt-btn' onClick={() => setFont('font2')}> Font2 </button>
                    <button className='fnt-btn' onClick={() => setFont('font3')}> Font3 </button>
                </div>
            </div>
        <hr />
        </>
    );
}


