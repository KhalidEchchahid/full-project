import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@mui/material";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useNavigate } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';

const myStyle = {
  paper: {
    with: "100%",
    padding: "5px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
    overflowX: "hidden",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
};

const Form = ({ currentId, setCurrentId, setOpen }) => {
  const user = JSON.parse(window.localStorage.getItem("profile"));
  const fullName = `${user?.user?.firstName} ${user?.user?.lastName}`;
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    tags: "",
    pdfFile: null,
  });
  console.log(postData);

  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p.id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setPostData({ ...post, pdfFile: null });
    }
  }, [post]);

  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("description", postData.description);
    formData.append("tags", postData.tags);
    formData.append("pdfFile", postData.pdfFile);
    formData.append("userId", user?.user?.id);
    formData.append("creatorName", fullName);
    console.log(formData);
    if (!currentId) {
      dispatch(createPost(formData));
    } else {
      dispatch(updatePost(currentId, formData));
    }

    setOpen(false);
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({ title: "", description: "", tags: "", pdfFile: null });
  };

  const handleFileChange = (e) => {
    setPostData({ ...postData, pdfFile: e.target.files[0] });
  };

  return (
    <form
      onSubmit={handelSubmit}
      autoComplete="off"
      noValidate
      style={myStyle.form}
    >
      <Typography variant="h6">
        {currentId ? "Editing" : "Creating"} a Post
      </Typography>
      <TextField
        name="title"
        varient="outlined"
        label="title"
        fullWidth
        style={{ margin: "5px" }}
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
      />
      <TextField
        name="description"
        varient="outlined"
        label="description"
        fullWidth
        style={{ margin: "5px" }}
        multiline
        rows={4}
        value={postData.description}
        onChange={(e) =>
          setPostData({ ...postData, description: e.target.value })
        }
      />
      <TextField
        name="tags"
        varient="outlined"
        label="tags"
        placeholder="Use comma to separate tags"
        fullWidth
        style={{ margin: "5px" }}
        value={postData.tags}
        onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
      />
      <div style={myStyle.fileInput}>
        {!currentId && (
          <>
          <Button variant="outlined" component="label">
            <UploadFileRoundedIcon />
            Upload PDF File
            <input
              accept="application/pdf"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </Button>
           {postData.pdfFile && <span> {postData.pdfFile.name} </span> }
          </>
        )}
      </div>
      <Button
        style={myStyle.buttonSubmit}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        fullWidth
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={clear}
        fullWidth
      >
        Clear
      </Button>
    </form>
  );
};

export default Form;
