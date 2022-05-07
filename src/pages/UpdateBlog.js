import React,{useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { BlogContext } from '../context/NewBlogContext';
import Swal from 'sweetalert2';

// ! updateBlog ile data editleme işlemii yalnızca login olanlar ve o blog u ekleyenler yapsın istiyoruz bunun için AuthContext i
// ! data editlemek için de blogContext i bu contextleri kullanmak için useContext i import ediyoruz... 

const UpdateBlog = () => {
  // ! EditTask u blogContext den alıyoruz
  const {EditTask} = useContext(BlogContext);
  // ! navigate ile gönderdiğimiz state i location ile alıyoruz...
  const location = useLocation()
  const navigate = useNavigate()

  const item = location.state.item
  // console.log(item);

  // ! blog eklemek için başlangıç değerlerini giriyoruz.
  // ! bu değerler gönderdiğimiz değerler oluyor...
  const [info, setInfo] = React.useState({
    id:item.id,
    title: item.title,
    content: item.content,
    imgUrl: item.imgUrl,
    // user:item.email,
    addDate: new Date(),
    likeCount: 0,
    commentCount: 0,

});

  // ! valueları alıp state e aktarıyoruz...

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setInfo({...info,[name]:value})
    // addBlog(posts);
    // toastSuccessNotify("Blog added successfully!");
    console.log(info)

  };

   // ! submit anında dataya editlenen info yu gönderiyoruz ve navigate ile Main e yönlendiriyoruz...
  // ! eğer blog editlenirse Swal.fire ile bildirim gösteriyoruz...

  const handleSubmit = (e) => {
    e.preventDefault();
    EditTask(info);

    Swal.fire(
        'Good job!',
        'Edit successfully!',
        
    )
    navigate("/")
  }

  return (
    <Container className="login-container" style={{ height: "100vh" }}>
    <Box className="login-box">
      <Avatar
        // className="login-avatar"
        alt="avatar_img"
        src={item.imgUrl}
        sx={{ width: 100, height: 100 ,backgroundSize: "cover",backgroundRepeat: "no-repeat",}}
      />
      <Typography
        variant="h4"
        component="h1"
        sx={{ m: 4, fontFamily: "Girassol", color: "#046582" }}
      >
        ── UPDATE BLOG ──
      </Typography>
    
      <form 
      onSubmit={handleSubmit}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              id="title"
              label="Title"
              name="title"
              variant="outlined"
              type="text"
              autoFocus
              autoComplete="title"
              required
              value={info.title}
              onChange={handleChange}
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="imgUrl"
              label="Image URL"
              name="imgUrl"
              variant="outlined"
              type="text"
              autoComplete="image-url"
              required
              // value={item.imgUrl}
              defaultValue={info.imgUrl}
              onChange={handleChange}

            
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="content"
              label="Content"
              name="content"
              multiline
              variant="outlined"
              type="text"
              rows={10}
              autoFocus
              autoComplete="content"
              required
              // value={item.content}
              defaultValue={info.content}
              onChange={handleChange}

              
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{ backgroundColor: "#046582", fontWeight: 700 }}
              variant="contained"
              color="primary"
              type="submit"
              // onClick={handleLogin}
              fullWidth
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
      
    </Box>
  </Container>
  )
}

export default UpdateBlog