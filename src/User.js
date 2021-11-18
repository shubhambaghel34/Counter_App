import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const jsonData = await response.json();
    console.log("--", jsonData);
    setUser(jsonData);

    return jsonData;
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {user.map((item) => (
        // <li key={item.id}>{item.title}</li>

        <table>
          <tr key={item.id}></tr>

          <p>{item.title}</p>
        </table>
      ))}
    </div>
  );
};

export default User;
