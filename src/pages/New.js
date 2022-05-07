import { Stack, Avatar } from "@mui/material";
import React, { useState } from "react";
import blok from "../assets/blok.png";
import { teal } from "@mui/material/colors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { BlogContext } from "../context/NewBlogContext";
import Swal from "sweetalert2";

const New = () => {
  const { currentUser } = React.useContext(UserContext);
  const { AddTask } = React.useContext(BlogContext);
  const initialValues = {
    title: "",
    imgUrl: "",
    content: "",
    user: currentUser?.email,
    likeCount: 0,
    commentCount: 0,
    date:Date.now(),
  };


  const navigate = useNavigate();
  console.log(currentUser)

  const [info, setInfo] = useState(initialValues);

  
  const handleFormSubmit = (e) => {
    if(info?.title.length < 1){
      return (
        alert("Boş girmeyin")
      )

    }else if(info?.title.length >  0){
      e.preventDefault();
      AddTask(info, navigate);
    }
    
    
  };

  const handleChange = (e) => {
    e.preventDefault();
    // const name=e.target.name
    // const value=e.target.value
    const { name, value } = e.target;
    console.log(name, value);
    setInfo({ ...info, [name]: value });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar_img"
          src={blok}
          sx={{
            width: 250,
            height: 200,
            bgColor: teal[900],
            borderRadius: 100,
          }}
        />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "45ch" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="title*"
            name="title"
            color="secondary"
            onChange={handleChange}
            value={info.title}
          />
          <TextField
            label="Image URL"
            name="imgUrl"
            color="secondary"
            onChange={handleChange}
            value={info.imgUrl}
          />
          <TextField
            id="outlined-multiline-static"
            label="Content*"
            multiline
            rows={4}
            onChange={handleChange}
            value={info.content}
            name="content"
          />
        </Box>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: 410 }}
            type="submit"
            value="Submit"
          >
            Submit
          </Button>
        </Grid>
      </Stack>
    </form>
  );
};

export default New;
