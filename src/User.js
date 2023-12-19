import {useState,useEffect} from 'react';

function User(){
    let [name,setName] =useState("Subrato");

    let [city,setCity]= useState("Kolkata");
  
    let [users,setUsers]= useState([]);
  
  
    useEffect(()=>{

      let controller = new AbortController();
      let signal = controller.signal;
      
      fetch("https://jsonplaceholder.typicode.com/users",{
        signal:signal
      })
      .then((response)=>response.json())
      .then((data)=>{
        
        setUsers(data);
      })
      .catch((err)=>{console.log(err)});


      return ()=>{
        controller.abort();
      }
  
    },[])
  
  
    function readValue(value){
      console.log(value);
    }
  
  
    return (
      <div className="App">
  
        <input type="text" onChange={(event)=>{
          readValue(event.target.value);
        }}></input>
  
  
        <h1>{name}</h1>
        
        <button onClick={()=>{
          setName("piyush");
        }}>
          Change Name
        </button>
  
  
        <h1>{city}</h1>
        <button onClick={()=>{
          setCity("Serampore");
        }}>
          Change City
        </button>
  
  
        {
          users.map((user,index)=>{
  
            return(
              <h1 key={index}>{user.name}</h1>
            )
  
          })
        }
  
  
      </div>
  
  
    );
}

export default User;