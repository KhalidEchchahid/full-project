import { useState } from "react";
import {
  Dialog,
  DialogContent,

  TextField,
  DialogActions,
  Grid,
  Paper,
  Avatar,
  Typography,
  Chip,
  Button,
  Divider,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import MyPDFViewer from "./MyPDFViewer";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addComment, deleteComment } from "../../actions/posts";
// import "./styles/MyPDFViewer.css";

const PostDetailes = ({ openPost, setOpenPost, post }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const fullName = `${user?.user?.firstName} ${user?.user?.lastName}`;
  console.log(fullName);
  const [comment, setComment] = useState({
    userId: user?.user?.id,
    creator: fullName,
    text: "",
  });

  const handleAddComment = () => {
    console.log(comment);
    if (comment.text == "") {
      console.log("comment can't be empty");
      return;
    }
    dispatch(addComment(comment, post.id));
    setComment({
      userId: user?.user?.id,
      creator: fullName,
      text: "",
    });
  };

  const handleClose = () => {
    setOpenPost(false);
  };

  return (
    <Dialog open={openPost} onClose={handleClose} maxWidth="xl" fullWidth maxHeight="xl">
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar sx={{ mr: 2 }}>{post.creatorName.substring(0, 1)}</Avatar>
              <Typography variant="h6" component="div">
                {post.title}
              </Typography>
            </Box>
            <Box mb={2}>
              {post.tags.split(",").map((tag) => (
                <Chip label={tag} sx={{ mr: 1 }} />
              ))}
            </Box>
            <Box
              mb={2}
              sx={{
                maxHeight: "100px",
                overflow: "auto",
                "&::-webkit-scrollbar": {
                  width: "8px",
                  backgroundColor: "#F5F5F5",
                },
                "&::-webkit-scrollbar-thumb": {
                  borderRadius: "10px",
                  backgroundColor: "#9E9E9E",
                },
              }}
            >
              <Typography variant="body1">{post.description}</Typography>
            </Box>
            <Divider />

            <Box mt={2}>
              <Typography variant="h6" component="div">
                Comments
              </Typography>
              <List
                sx={{
                  height: "222px",
                  overflow: "auto",
                  "&::-webkit-scrollbar": {
                    width: "8px",
                    backgroundColor: "#F5F5F5",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    borderRadius: "10px",
                    backgroundColor: "#9E9E9E",
                  },
                }}
                ref={(el) => {
                  if (el) {
                    el.scrollTop = el.scrollHeight;
                  }
                }}
              >
                {post.comments.map((comment) => (
                  <>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>{comment?.creator?.substring(0, 1)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={comment?.text}
                      secondary={`${comment?.creator} - ${moment(
                        comment?.createdAt
                      ).fromNow()}`}
                    />
                    <ListItemSecondaryAction>
                      {comment?.userId == user?.user?.id && (
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() =>
                            dispatch(deleteComment(comment?.id, user?.user.id))
                          }
                        >
                          <RemoveCircleOutlineIcon color="primary" />
                        </IconButton>
                      )}
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant="middle"/>
                  </>
                ))}
              </List>

              <Box display="flex" alignItems="center" mt={2}>
                <TextField
                  label="Add a comment"
                  value={comment?.text}
                  onChange={(e) =>
                    setComment({ ...comment, text: e.target.value })
                  }
                  fullWidth
                  size="small"
                />
                <Box ml={1}>
                  <Button variant="contained" onClick={handleAddComment}>
                    Add
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                p: 2,
                height: "542px",
                overflow: "auto",
                backgroundColor: "#9E9E9E",
                display: "flex",
                justifyContent: "center",
                "&::-webkit-scrollbar": {
                  width: "8px",
                  backgroundColor: "#F5F5F5",
                },
                "&::-webkit-scrollbar-thumb": {
                  borderRadius: "10px",
                  backgroundColor: "#9E9E9E",
                },
              }}
            >
              <MyPDFViewer pdfFile={post.pdfFile} />
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          size="small"
          color="primary"
          href={`data:application/pdf;base64,${post.pdfFile}`}
          download={`${post.title}.pdf`}
        >
          Download PDF
        </Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
export default PostDetailes;
