import React, { useEffect, useState } from "react";

const FetchData = () => {
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
      {data.map((post) => {
        const { id, title } = post;
        return (
          <>
            <table border="10px" width="1000px">
              <tr>
                <th>
                  ID
                  <tr>
                    <td>{id}</td>
                  </tr>
                </th>
                <th>
                  Title
                  <tr>
                    <td>{title}</td>
                  </tr>
                </th>
              </tr>
            </table>
          </>
        );
      })}
    </div>
  );
};

export default FetchData;
