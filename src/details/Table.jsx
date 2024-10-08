import react, { useState } from "react";

const Table = ()=>{
  const [show, setShow] = useState(false)
  const showIt = ()=>{
    setShow(true)
  }
  const hideIt = ()=>{
    setShow(false)
  }
    const items = [
        {
            name: "Shola Adewale",
            age: "20",
            course: "Science",
            hobbies: "Football",
             class: "SS 3"
        },
        {
            name: "Biodun Michael",
            age: "15",
            course: "Biology",
            hobbies: "Swimming",
             class: "SS 1"
        },
        {
            name: "Johnson Michael",
            age: "17",
            course: "Physics",
            hobbies: "Reading",
            class: "SS 3"
        }
    ]
    
    return (
        <div>
           <table border={1} style={{margin:" 0,50px"}}>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>hobbies</th>
            </thead>
            <tbody>
               
                    {items.map((item, index)=>( 
                         <tr key={index}>
                           <td style={{padding:"10px", textAlign: "center"}}>{item.name}</td>
                          <td style={{padding:"10px", textAlign: "center"}}>{item.age}</td>
                          <td style={{padding:"10px", textAlign: "center"}}>{item.course}</td>
                          <td style={{padding:"10px", textAlign: "center"}}>{item.hobbies}</td>
                          </tr>
                    ))}
                  
               
            </tbody>
           </table>

            
            <hr />

          <table border={3}  style={{margin:"30px"}}>
          <thead>
            <th>name</th>
            <th>age</th>
            <th>course</th>
            <th>class</th>
          </thead>
          <tbody>
            {items.map((item, index) => (
                <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.class}</td>
            </tr>
            ))}
          </tbody>
          </table>
           
           <button onClick={hideIt}>hide</button>
           <button onClick={showIt}>show</button>
           {show && <div>must show it</div>}
        </div>
    )
}


export default Table;