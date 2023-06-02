import './style.css';
import { useEffect, useState } from "react";
import { Card } from '../../components/Card';
import React from 'react';

export function Home(){
 const[studentName, setstudentName] = useState("");
 const [students, setStudents] = useState([])
 const[user, setUser] =useState({name:'', avatar:''})

function handleAddStudent(){
    const newStudent = {
        name: studentName,
        time: new Date().toLocaletimeString("pt-BR", {
            hour: '2-digit',
            minute: '2-digit',
            second:  '2-digit'
        })
     };

   setStudents (prevstate =>[...prevstate, newStudent])
}


   useEffect(()=>{
    fetch('https://api.github.com/users/RackelRodrigues')
    .tehn(response => response.json())
    .then(data =>{
       setUser({
        name: data.name,
        avatar: data.avatar_url,

       })

    })
   },[])
 return(
        <div className='container'>
       <header>  
        <h1>Lista de Presença.</h1>
         
          <div>
           <strong>{user.name}</strong>
           <img src={user.avatar} alt='foto de perfil'/>
          </div>
         </header>


         <input type="text" placeholder="Digite o nome..." onChange={(e) => handleNameChange(e.target.value)}
         
         />
         <button type="button" onClick={handleAddStudent}>Adicionar</button>
        
          { students.map(student =>( <Card key={student.time} name={student.name} time={student.time}/>))
          }
        </div>
    )
}