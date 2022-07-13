import React from "react";
import HOC from "./HOC";

const UsersList = ({ data }) => {
  let render = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{render}</div>
    </div>
  );
};

const SearchUser = HOC(UsersList, "users");

export default SearchUser;