import { useState } from "react";
import axios from 'axios';

const Home = ()=>{
    const [code,setCode] = useState('');
    const [output, setOutput] = useState('');

    const handleExecute = async () => {
        try {
          const response = await axios.post('http://localhost:5000/execute', { code });
          setOutput(response.data.output);
        } catch (error) {
          setOutput('Error executing code');
        }
      };
    return(
        <div className="container h-screen">
            <div className="container bg-customBlue max-w-screen-lg mx-auto p-4 rounded-md h-100">
                <p className="text-lg text-white font-bold">Code Runner</p>
            </div>
            <div className="container max-w-screen-lg mx-auto flex flex-row mt-8">
                <div className="container w-1/2 p-2">
                    <div className="px-2 py-1 bg-gray-300 rounded-t-md flex justify-between">
                        <p className="text-black font-bold">Code</p>
                        <button className="border-none bg-customBlue px-4 text-sm text-white font-semibold rounded-sm hover:bg-opacity-45 transition-all duration-200" onClick={handleExecute}>Run</button>

                    </div>
                    <div className="h-full w-full rounded-b-md border-2 border-gray-600 pb-1">
                        <textarea className="w-full h-full border-none resize-none focus:outline-none" value={code} onChange={(e)=>setCode(e.target.value)} cols='50' rows='15'/>
                    </div>
                </div>
                <div className="container w-1/2 p-2">
                    <div className="px-2 py-1 bg-customBlue rounded-t-md">
                        <p className="text-white font-bold">Output</p>
                    </div>
                    <div className="h-full w-full rounded-b-md border-2 border-gray-600 pb-1">
                        <pre>{output}</pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home