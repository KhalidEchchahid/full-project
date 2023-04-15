import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  CardHeader,
  IconButton,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../actions/posts";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import MyPDFViewer from "./MyPDFViewer";
import PostDetailes from "./PostDetailes";
import "./styles/MyPDFViewer.css";

const myStyle = {
  tags: {
    margin: "7px 15px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "7px",
    height: "100%",
    position: "relative",
    "&:hover": {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    },
  },
  overlay: {
    position: "absolute",
    top: "15px",
    left: "15px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "15px",
    right: "15px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "5px 16px 5px 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
};

const Post = ({ post, setOpen, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openPost, setOpenPost] = useState(false);

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like.userId === user?.user?.id) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpOutlinedIcon fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpOutlinedIcon fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Card style={myStyle.card} elevation={6}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {post.creatorName.substring(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {user?.user?.id === post?.userId && (
              <MoreVertIcon
                onClick={() => {
                  setCurrentId(post.id);
                  setOpen(true);
                }}
              />
            )}
          </IconButton>
        }
        title={post.creatorName}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardContent>
        <div className="pdf-container">
          <MyPDFViewer pdfFile={post.pdfFile} />
        </div>
      </CardContent>
      <ButtonBase
        onClick={() => setOpenPost(true)}
        component="span"
        name="test"
        style={myStyle.cardAction}
      >
        <div>
          <Typography
            style={myStyle.tags}
            variant="body2"
            color="textSecondary"
          >
            {post.tags.split(",").map((tag) => (
              <span key={tag}>#{tag.trim()} </span>
            ))}
          </Typography>
        </div>
        <Typography style={myStyle.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            {post.description.length >= 50
              ? `${post.description.substring(0, 50)}...`
              : post.description}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions style={myStyle.cardActions}>
        <Button
          size="small"
          disabled={!user?.user}
          color="primary"
          onClick={() => dispatch(likePost(post.id, user?.user?.id))}
        >
          <Likes />
        </Button>
        <Button
          size="small"
          color="success"
          href={`data:application/pdf;base64,${post.pdfFile}`}
          download={`${post.title}.pdf`}
        >
          <DownloadIcon />
          Download
        </Button>
        {user?.user?.id === post?.userId && (
          <IconButton
            size="small"
            color="error"
            onClick={() => dispatch(deletePost(post.id))}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </CardActions>
      <PostDetailes openPost={openPost} setOpenPost={setOpenPost} post={post} />
    </Card>
  );
};

export default Post;
