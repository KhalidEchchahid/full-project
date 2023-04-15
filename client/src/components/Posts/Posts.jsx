import React, { useState } from "react";
import Post from "./Post";
import { Grid, Button, Paper, CircularProgress } from "@mui/material";
import PostAddSharpIcon from "@mui/icons-material/PostAddSharp";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import Popup from "./Popup.jsx";
import Paginate from "./Pagination";
import { useSelector } from "react-redux";
import ChipInput from "./ChipInput";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../actions/posts.js";
import image1 from "../../assets/Jan45-removebg-preview.png";

const myStyle = {
  add: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "space-between",
  },
  mainContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  smMargin: {
    margin: "2px",
  },
  actionDiv: {
    textAlign: "center",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Posts = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSeach] = useState(null);
  const { posts, isLoading } = useSelector((state) => state.posts);
  const [currentId, setCurrentId] = useState(null);
  const [tags, setTags] = useState([]);

  const searchPost = () => {
    if (tags.length !== 0) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/posts");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "500px",
            padding: "15px 0 ",
          }}
        >
          <ChipInput tags={tags} setTags={setTags} />
          <Box ml={0.5}>
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "#4d547d", color: "#fff" }}
              onClick={searchPost}
            >
              Search
            </Button>
          </Box>
        </Box>
        <Box style={myStyle.add} height="35px">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#a6a9be", color: "#fff" }}
            onClick={() => setOpen(true)}
          >
            <PostAddSharpIcon fontSize="large" />
            <span>Add</span>
          </Button>
        </Box>
      </Box>

      {!posts.length && !isLoading ? (
        "NO Posts"
      ) : isLoading ? (
        <Box
          sx={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          style={myStyle.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid key={post.id} item xs={12} sm={12} md={6} lg={4}>
              <Post post={post} setOpen={setOpen} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )}
      {!tags.length && (
        <Paper style={myStyle.pagination} elevation={6}>
          <Paginate page={page} />
        </Paper>
      )}
      <Popup
        open={open}
        setOpen={setOpen}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
    </Box>
  );
};

export default Posts;
