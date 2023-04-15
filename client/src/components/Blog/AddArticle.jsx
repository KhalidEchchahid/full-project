import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Grid,
  Container,
  Button,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import "./styles/MyEditor.css";

function AddArticle() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image , setImage] = useState(null);

  function handleChange(value) {
    setContent(value);
    console.log(content);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleImageUpload(event) {
    setImage(event.target.files[0]);
    console.log(image);
  }
  function handleSubmit(event){
    event.preventDefault();
  }
  const categoryOptions = [
    { value: "artificial_intelligence", label: "Artificial Intelligence" },
    { value: "machine_learning", label: "Machine Learning" },
    { value: "web_development", label: "Web Development" },
    { value: "mobile_development", label: "Mobile Development" },
    { value: "data_science", label: "Data Science" },
    { value: "computer_networking", label: "Computer Networking" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "computer_graphics", label: "Computer Graphics" },
    { value: "operating_systems", label: "Operating Systems" },
    { value: "databases", label: "Databases" },
    { value: "blockchain", label: "Blockchain" },
    { value: "cloud_computing", label: "Cloud Computing" },
    { value: "computer_vision", label: "Computer Vision" },
    { value: "internet_of_things", label: "Internet of Things" },
    {
      value: "natural_language_processing",
      label: "Natural Language Processing",
    },
    { value: "quantum_computing", label: "Quantum Computing" },
    { value: "robotics", label: "Robotics" },
    { value: "virtual_reality", label: "Virtual Reality" },
    { value: "augmented_reality", label: "Augmented Reality" },
    { value: "game_development", label: "Game Development" },
  ];

  return (
    <Container sx={{ minHeight: "95vh", mt: "40px" }}>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={handleTitleChange}
          />
        </Grid>

        <Grid item xs={12} md={5}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={category}
              onChange={handleCategoryChange}
              label="Category"
            >
              {categoryOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={1}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" onChange={handleImageUpload}/>
            <PhotoCamera />
          </IconButton>
        </Grid>

        <Grid item xs={12}>
          <ReactQuill
            value={content}
            onChange={handleChange}
            className="my-editor"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ mt: "60px" }}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      </form>
    </Container>
  );
}

export default AddArticle;
