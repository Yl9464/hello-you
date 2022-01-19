import React from 'react' 
import Names from './names'

const Intros = () => {

    const people = ['Marnie', 'Mikaela', 'Tricia', 'Ying']

    return(
      <div>
         {people.map(person => {
             return <h2> {person} </h2>
         })  } 
         <p> We have animals, pets are awesome, I like dogs! Dogs/cats are better than people</p> 

      </div> 
       
    ) 
}

export default Intros;