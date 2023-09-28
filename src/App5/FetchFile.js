import React,{useState,useEffect} from 'react'

const FetchFile = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    if (!res.ok) {
      throw new Error("site not working");
    }
    return res.json();
  })
  .then((data) => {
    setData(data);
  })
  .catch((err) => {
    console.log(err);
  });

    })
  return (
    <div>
      {data.map((post)=>{
        const{id,title}=post;
        return(
            <>
            <h1>{id}</h1>
            <p>{title}</p>
            </>
        )
      })}
    </div>
  )
}

export default FetchFile
