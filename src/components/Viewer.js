import React from 'react';
import { useLocation } from 'react-router-dom';
import { decompressFromEncodedURIComponent } from 'lz-string';

const Viewer = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const compressedTitle = queryParams.get('title') || '';
    const compressedContent = queryParams.get('content') || '';

    const title = compressedTitle ? decompressFromEncodedURIComponent(compressedTitle) : '';
    const content = compressedContent ? decompressFromEncodedURIComponent(compressedContent) : '';

    return (
        <div className="m-5">
            <input readOnly value={title} className="block w-full mb-4 p-2 border border-gray-300 rounded"></input>
            <textarea 
                value={content} 
                readOnly 
                rows="10"
                className="block w-full p-2 border border-gray-300 rounded"
            />
        </div>
    );
};

export default Viewer;
