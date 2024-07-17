import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createMenu } from "../store/slices/menuSlice";
import { showSnackbar } from "../store/slices/AppSnackbarSlice";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewAddonCategoryDialog = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>New Addon Category</DialogTitle>
      <DialogContent sx={{ width: 300 }}>
        <Typography>New Addon Category Component here</Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button variant="outlined" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#26355D",
            "&:hover": { bgcolor: "#405589" },
            width: 100,
            height: 35,
          }}
          onClick={() => {}}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewAddonCategoryDialog;
