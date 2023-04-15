import React from "react";
import { Dialog, DialogContent, DialogTitle ,DialogContentText ,TextField ,DialogActions ,Button} from "@mui/material";
import Form from './Form'

const Popup = ({open , setOpen , currentId , setCurrentId}) => {
    
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
        <Form setOpen={setOpen} currentId={currentId} setCurrentId={setCurrentId} />
         </DialogContent>
    </Dialog>
  )
}

export default Popup