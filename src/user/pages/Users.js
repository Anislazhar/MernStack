import React from "react";
import UsersList from "../components/UsersList";
import Anis from "./img/Anis.png";

// dumm/presentation component

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Anis Lazhar",
      image: Anis,
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
