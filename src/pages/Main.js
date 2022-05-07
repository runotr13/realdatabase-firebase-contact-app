import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BlogContext } from '../context/NewBlogContext';
import moment from "moment";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import loadingGif from '../assets/loading.gif'


export default function Main() {

  const {useFetch,DeleteTask} = React.useContext(BlogContext)
  const {isLoading,taskList} = useFetch()
  console.log("taskListOnur",taskList)
  const navigate = useNavigate()
  const [color,setColor] = React.useState(true)
  

  const heartClick = (e) => {
    console.log(e.currentTarget)
    setColor(!color)

    if(color){
      e.target.style.color = "red"

    }else {
      e.target.style.color = "gray"
    }
  
  
  }
  return (
    <div className="MainComp">
    <h3 className="titleDashboard">──── <span>D</span>ashboard ────</h3>
    <div className="cardContainer">
      
      { isLoading ? (
        <img src={loadingGif} alt="" />
      )
      : (
        taskList?.map((item) => (
          
          <Card sx={{ width: 346, margin: 3 , bgColor: red ,borderRadius : 5,boxShadow : 10 }} key={item.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ width : 50}} aria-label="recipe">
            {item.content[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        /* subheader={`${date.getDate()}/${monthNames[date.getMonth()]}/${date.getFullYear()}`} */
        subheader={moment(item?.addDate).format("MM/DD/YYYY")}
        
      />
      <CardMedia
        component="img"
        height="194"
        image={item.imgUrl}
        alt=""
        sx={{width: 343,margin:"auto"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.content}
        </Typography>
      </CardContent>
      <div className="resul">
      <AccountCircleIcon sx={{ width : 50 , display:"flex"}} >
        </AccountCircleIcon>
        <p>{item?.user}</p>
        </div>
      <CardActions disableSpacing>
        
        <IconButton aria-label="add to favorites" onClick={heartClick}>
        <FavoriteIcon />

        </IconButton>
        
        <Button size="small">
              <ChatBubbleOutlineIcon
                style={{
                  marginRight: "7px",
                  color: item.commentCount > 0 ? "blue" : "gray",
                }}
              />
              {item?.commentCount}
            </Button>
        <Button size ="small" onClick={() => navigate("/update",{state:{item}})}>
        <EditIcon id="svgEdit">
        </EditIcon>
        </Button>
      <Button size ="small" onClick={()=>DeleteTask(item.id)}>
      <svg data-testid="DeleteIcon" id='svgDelete'><DeleteIcon ></DeleteIcon></svg>
      </Button>
      </CardActions>
      
    </Card>
    
    
        ))
        )
      }
    
    </div>
    
    </div>
  );
}
