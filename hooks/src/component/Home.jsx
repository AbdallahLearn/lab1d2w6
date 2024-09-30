import React, { useState } from 'react';

function Home() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState(null);
    const [darkMode, setDarkMode] = useState(false); // State for dark mode

    const handleOperation = (operation) => {
        let res;
        switch (operation) {
            case '+':
                res = value1 + value2;
                break;
            case '-':
                res = value1 - value2;
                break;
            case '*':
                res = value1 * value2;
                break;
            case '%':
                res = value1 % value2;
                break;
            default:
                return;
        }
        setResult(res);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return (
        <div className={`m-auto text-center p-5 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-all h-screen` }>
            <button onClick={toggleDarkMode} className="p-3 bg-blue-500 text-white rounded mb-4">
                Mode
            </button>
            <div className="flex justify-center gap-10">
                <div>
                    <h2 className='text-3xl'>{value1}</h2>
                    <button onClick={() => setValue1(value1 + 1)} className="p-3 bg-blue-500 text-white rounded mx-2">+</button>
                    <button onClick={() => setValue1(value1 - 1)} className="p-3 bg-blue-500 text-white rounded mx-2">-</button>
                </div>
                <div>
                    <h2 className='text-3xl'>{value2}</h2>
                    <button onClick={() => setValue2(value2 + 1)} className="p-3 bg-blue-500 text-white rounded mx-2">+</button>
                    <button onClick={() => setValue2(value2 - 1)} className="p-3 bg-blue-500 text-white rounded mx-2">-</button>
                </div>
            </div>
            <div className="mt-20">
                <button onClick={() => handleOperation('+')} className="p-5 bg-green-500 text-white rounded mx-2">+</button>
                <button onClick={() => handleOperation('-')} className="p-5 bg-green-500 text-white rounded mx-2">-</button>
                <button onClick={() => handleOperation('*')} className="p-5 bg-green-500 text-white rounded mx-2">*</button>
                <button onClick={() => handleOperation('%')} className="p-5 bg-green-500 text-white rounded mx-2">%</button>
            </div>
            {result !== null && <div className="mt-4 text-2xl">Result: {result}</div>}
        </div>
    );
}

export default Home;
