import "./App.css";
import "./App.css";
import { useState } from "react";
import Radium from 'radium';
import Main from './components/Main';



const App = () =>
{


  const style = {
    backgroundColor : 'green',
    color: 'white',

    ':hover' : {
      backgroundColor : 'lightgreen',
      color : 'black'

    }
  }
  const [userInput , setUserInput] = useState('');
  const [toggleswitch , settoggleSwitch] = useState(true);
  const [countId , setCountId]  = useState(4);

  const [courseGoals , setCourseGoals]  =useState( [
    {
      id : 1,
      text : 'Ashutosh'
    },
    {
      id : 2,
      text : 'Rishabh'
    },
    {
      id :3 , 
      text : 'Deepak'
    }
 ]);


  const addHandler = prop =>
{
      
  // setCourseGoals( courseGoals.concat(prop));

  setCourseGoals (  (prevCoursegoals) =>
  {
    return prevCoursegoals.concat(prop);
  })


}

const textHandle = event =>
{
  setUserInput(event.target.value);
  
}
  const addGoalHandler = event =>
  {

      event.preventDefault();


      const newGoal = 
      {
        id  : countId,
        text: userInput,
  };
 if(userInput)
 {  addHandler(newGoal);
    setUserInput('');

    countHandler();
 }
  }

  const toggleswitchHandler = () =>
{
    const doesShow = toggleswitch;
  settoggleSwitch(!doesShow); 
}

const countHandler = () =>
{
  setCountId ( prevState =>
    {
    return  prevState += 1;
    });
}
const decHandler = () =>
{

     let len = courseGoals.length;
     if(len > 3)
     {
       setCourseGoals (  
               courseGoals.splice(0, len-1)
      );
      setCountId(countId-1);
       }

       
}
const deleteHandler = (index)=>
{
  
       if(index >=3 )
       {
   setCourseGoals(courseGoals.filter( item => index+1 !== item.id));
   setCountId(countId-1);
}
}
if(toggleswitch)
{
  {style.backgroundColor='red'
    
   
    style[':hover'] = {
        backgroundColor : 'salmon',
        color  : 'black'  
       
    } 
  } 
}

 return  (
   <>
   <h1> Enter Your Name </h1>

   <form > 
     <input type="text" value = { userInput} onChange= {textHandle}> 
     </input>
     <button type="submit"  onClick = { addGoalHandler }> Submit </button>
     <button type="button" onClick = {decHandler} >  Remove  </button>
  { toggleswitch ?  <button type="button" onClick={toggleswitchHandler} style = {style} >  HIDE   </button>  : <button type="button" onClick={toggleswitchHandler} style={style} >  SHOW   </button> 
 

}
    
    {
      toggleswitch ? 
      <div>
    <ul className = "ul"> 
       {courseGoals.map ( (goal, key) =>
        {
          return <li onClick = { ()=>{deleteHandler(key)}} key = {goal.id}>{goal.id} {goal.text }  </li>;
        })}
         
    </ul>
      <Main/> </div>  :<div>     <h2 > Click Switch Button to show details.....</h2></div> 
     

} 

     </form>
   

 
 </>
 )

  

}
export default Radium(App);
