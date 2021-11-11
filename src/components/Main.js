import React, { useState} from 'react'
import Validation from './Validation';
import Char  from './Char';
 const Main = () => {
    

    const [userInput , setUserInput] = useState(
        ""
    );

    const userInputHandler = event=>
    {
        

          setUserInput(event.target.value);

    }
   const deleteHandler = (index)=>
   {  const text = userInput.split('');
      text.splice(index , 1);
      const updatedtext = text.join('');
      setUserInput(updatedtext);

        console.log(userInput);
   }

    return (
        <div>
        <input type="text" value={userInput} onChange = {userInputHandler} />
        <p> {userInput.length} </p>
        <Validation len = {userInput.length} />
        {
       userInput.split('').map((item , index  )=>
    {
   return  <Char   letter = { item} key = {index} handler = {()=> {deleteHandler(index)}} />
    }) 
}
         
            
        </div>
    )

    }

export default Main;