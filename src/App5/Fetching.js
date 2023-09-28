import React, { useEffect, useState } from "react";

const Fetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("site is not working");
        }
        return res.jason();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      {data.map((post) => {
        const { id, title } = post;
        return (
          <>
            <h1>Tittle:{title}</h1>
            <p>{id}</p>
          </>
        );
      })}
    </div>
  );
};

export default Fetching;
