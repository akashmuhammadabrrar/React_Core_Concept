import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users: {users.length}</h2>
    </div>
  );
}

/**
 * 1: Declare A State To Hold The Data
 * 2: UseEffect With Call Back And Dependency Array
 * 3: Fetch The Data
 * **/
