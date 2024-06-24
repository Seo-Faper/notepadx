import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { compressToEncodedURIComponent } from 'lz-string';

const Editor = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [title, setTitle] = useState(queryParams.get('title') || '');
    const [content, setContent] = useState(queryParams.get('content') || '');

    useEffect(() => {
        const compressedTitle = compressToEncodedURIComponent(title);
        const compressedContent = compressToEncodedURIComponent(content);
        const params = new URLSearchParams();
        
        if (compressedTitle) params.set('title', compressedTitle);
        if (compressedContent) params.set('content', compressedContent);
        
        navigate(`/notepadx/edit?${params.toString()}`, { replace: true });
    }, [title, content, navigate]);

    useEffect(() => {
        const handleSaveShortcut = (e) => {
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                const compressedTitle = compressToEncodedURIComponent(title);
                const compressedContent = compressToEncodedURIComponent(content);
                
                const url = `${window.location.origin}/notepadx/?title=${encodeURIComponent(compressedTitle)}&content=${encodeURIComponent(compressedContent)}`;
                
                navigator.clipboard.writeText(url).then(() => {
                    alert('URL이 복사되었습니다.');
                });
            }
        };

        window.addEventListener('keydown', handleSaveShortcut);
        return () => {
            window.removeEventListener('keydown', handleSaveShortcut);
        };
    }, [title, content]);

    return (
        <div className="m-5">
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="제목" 
                className="block w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="오늘의 생각을 써보세요." 
                className="block w-full p-2 border border-gray-300 rounded" 
                rows="10"
            />
        </div>
    );
};

export default Editor;
