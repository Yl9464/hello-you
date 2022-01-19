import React, {useState} from 'react'

const Names = () => {
    const [name ,setName] = useState('') //'name' name of the State being created, 'setName' function that updates 'Name'

   //function that will handle the name change
    const handleChangeName = event => {
        setName(event.target.value)//using 'setName' to update the 'name' state
    }
return (
    <div>
  <h1> Hi our names are Marnie, Tricia, and Ying!</h1>

  <input type="text" onChange={handleChangeName} />  
  {name}

    </div>
)
}

export default Names;

//input type= "text", creates a text box 
//onChange= puts in the handleChangeName function