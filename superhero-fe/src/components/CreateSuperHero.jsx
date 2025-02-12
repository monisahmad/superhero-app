import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Snackbar,
} from "@mui/material";

const CreateSuperHero = ({mutate}) => {
  const [open, setOpen] = React.useState(false);  
  const [snackBarMessage, setSnackBarMessage] = React.useState("");
  // Set up useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/superheroes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setSnackBarMessage('Superhero created successfully!!!!');
      setOpen(true);
      mutate();
    } catch (error) {
      setSnackBarMessage('Error creating superhero!!!');
      setOpen(true);
    }
    // Post data to server or handle accordingly
  };

  return (
    <Paper style={{ padding: "30px" }}>
      <Typography variant="h4" gutterBottom>
        Create Superhero
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ""}
          sx={{ margin: "10px" }}
        />

        {/* Humility Score Field */}
        <TextField
          fullWidth
          label="Humility Score"
          variant="outlined"
          type="number"
          {...register("humilityScore", {
            required: "Humility score is required",
            min: {
              value: 1,
              message: "Humility score must be at least 1",
            },
            max: {
              value: 10,
              message: "Humility score cannot be more than 10",
            },
          })}
          error={!!errors.humilityScore}
          helperText={errors.humilityScore ? errors.humilityScore.message : ""}
          sx={{ margin: "10px" }}
        />

        {/* Superpower Field */}
        <TextField
          fullWidth
          label="Superpower"
          variant="outlined"
          {...register("superpower", { required: "Superpower is required" })}
          error={!!errors.superpower}
          helperText={errors.superpower ? errors.superpower.message : ""}
          sx={{ margin: "10px" }}
        ></TextField>

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: "10px" }}
        >
          Create My Superhero
        </Button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={snackBarMessage}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => setOpen(false)}
      />
    </Paper>
  );
};

export default CreateSuperHero;
