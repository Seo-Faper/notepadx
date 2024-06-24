import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeSwitcher from './components/ThemeSwitcher';
import Editor from './components/Editor';
import Viewer from './components/Viewer';
import './App.css';

function App() {
    return (
        <BrowserRouter basename="/notepadx">
        <Router>
            <div className="main-container bg-white dark:bg-gray-900 min-h-screen transition-colors duration-250 relative">
                <div className="flex items-center justify-between w-full p-4">
                    <div className="w-full ">
                        <Routes>
                            <Route path="/notepadx/edit" element={<Editor />} />
                            <Route path="/notepadx" element={<Viewer />} />
                        </Routes>
                    </div>
                    <div className="absolute bottom-4 right-4">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </Router>
        </BrowserRouter>
    );
}

export default App;
