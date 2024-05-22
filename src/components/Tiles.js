import React, { useState } from 'react';

const Tiles = () => {
  const [alphabet, setAlphabet] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
  const [outputString, setOutputString] = useState(''); 

  const handleInsertAlphabit = (char) =>{
    const index = outputString.indexOf(char);
    if( outputString?.length !== -1){
      let i;
      for( i = 0; i<outputString.length; i++){
        if( (outputString[i] >= char ) &&  outputString[i] !== '_'){
          // i++;
          break;
        }
      }
      
      const newString =  outputString.slice(0, i) + char + outputString.slice(i);

      let flag = 0;
      i = 0;
      for(i = 0; i<outputString.length; i++){
        if( i>0 && outputString[i]===outputString[i-1] && char===outputString[i] ){
          flag = 1;
          break;
        }
      }
      if(flag){
        console.log("flag", flag);
        const newString =  outputString.slice(0, i-1) + "_" + outputString.slice(i+1);
        setOutputString(newString);
      }
      else {
        setOutputString(newString);
      }
      
    }
    else{
      setOutputString(outputString+char)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      

      <div className='py-5'>
        <h1 className='font-semibold text-2xl py-2'>OutputString: </h1>
        <h1 className={`border px-2 py-1 ${outputString?.length ?  "" : "h-10"} font-semibold text-xl`}>{outputString}</h1>
      </div>

      <div>

        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-w-[500px]'>
          
          {
            alphabet.map((char)=>{
              return (
                <button 
                onClick={()=>handleInsertAlphabit(char)}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-20 h-12' 
                >{char}</button>
              )
            })
          }
        </div>
      </div>
      
    </div>
  );
};

export default Tiles;