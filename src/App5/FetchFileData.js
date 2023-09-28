import React, { useEffect, useState } from "react";

const FetchFileData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
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
  });
  return (
    <div>
      <table border="5px">
        <tr>
          <th>ID</th>
          <th>Tittle</th>
        </tr>
      </table>
      {data.map((post) => {
        const { id, title } = post;
        return (
          <>
            <table border="5px" width="1000px">
              <td>{id}</td>
              <td>{title}</td>
            </table>
          </>
        );
      })}
    </div>
  );
};

export default FetchFileData;
