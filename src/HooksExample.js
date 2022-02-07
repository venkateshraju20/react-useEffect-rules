import React, { useEffect, useState } from "react";

export default function HooksExample() {
  const [data, setData] = useState([
    { id: 1, username: "bret" },
    { id: 2, username: "sam" },
    { id: 3, username: "arjun" },
    { id: 4, username: "john" },
    { id: 5, username: "charles" },
  ]);
  const [numbers, setNumbers] = useState([10, 20, 30, 40, 50]);

  const deleteElement = (id) => {
    const res = data.filter((name) => name.id !== id);
    setData(res);
  };

  const deleteNumber = (id) => {
    console.log(id);
    // const index = numbers.indexOf(id);
    // console.log(index);
    // const res = numbers.splice(index, 1);
    const res = numbers.filter((number) => number !== id);
    setNumbers(res);
  };

  return (
    <center>
      {data.map((item) => {
        return (
          <p key={item.id}>
            {item.username}
            <button onClick={() => deleteElement(item.id)}>delete</button>
          </p>
        );
      })}
      {numbers.map((item) => {
        return (
          <p key={item}>
            {item}
            <button onClick={() => deleteNumber(item)}>delete</button>
          </p>
        );
      })}
    </center>
  );
}
