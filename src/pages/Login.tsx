import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  useLazyGetUserByUsernameAndEmailQuery,
  useGetUsersQuery,
} from "../services/jsonPlaceholderApi";
import { UserInterface } from "../services/types";

function Login() {
  const { data, isLoading, error } = useGetUsersQuery(undefined);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
  });

  const [userData, setUserData] = useState<UserInterface | null>(null);
  const [getUser, results] = useLazyGetUserByUsernameAndEmailQuery();

  useEffect(() => {
    if (results?.data) setUserData(results.data[0]);
    console.log(results);
  }, [results]);

  const changeCredentialsHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCredentials((prevCred) => ({
      ...prevCred,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMLzbM5qnm_9lEy09t3EJSdXa50lztS0tm3_4XovEih1y86HzB6-auG39fkEUToj8OeA&usqp=CAU)`,
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 3,
          backgroundColor: "#fff",
          width: "20%",
          height: "60vh",
          borderRadius: 0.5,
          padding: 5,
        }}
      >
        <InputBase
          sx={{
            border: "1px solid #f5f5f5",
            boxShadow: 2,
            p: 0.5,
            pl: 2,
            borderRadius: 0.5,
          }}
          name="username"
          placeholder="Username"
          onChange={changeCredentialsHandler}
        />
        <InputBase
          sx={{
            border: "1px solid #f5f5f5",
            boxShadow: 2,
            p: 0.5,
            pl: 2,
            borderRadius: 0.5,
          }}
          name="email"
          placeholder="Email"
          onChange={changeCredentialsHandler}
        />
        <Button
          variant="contained"
          onClick={() => {
            getUser({
              username: credentials.username,
              email: credentials.email,
            });

            const loggedInUser = data?.find(
              (user) =>
                user.username === userData?.username &&
                user.email === userData.email
            );

            if (loggedInUser)
              navigate("/search", {
                state: { username: credentials.username },
              });
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
