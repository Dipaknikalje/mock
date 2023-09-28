import React, { useEffect, useState } from "react";
import axios from "axios";
const AxiosFIle = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      {data.map((post) => {
        const { id, title } = post;
        return (
          <table border="5px" color="black">
            <tr></tr>
            <tr>
              <td>{id}</td>
              <td>{title}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

export default AxiosFIle;
