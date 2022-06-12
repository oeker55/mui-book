import { Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useState } from "react";

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const Add = () => {
    const [open, setOpen]= useState(false)
  return (
    <div>
      <Tooltip sx={{position:"fixed", bottom:"50px", left:"50px"}} title="Add">
        <Fab onClick={()=>setOpen(true)} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box width={400} height={500} bgcolor={"background.default"} p={2} borderRadius={5}>
    <Typography mb={"5px"} variant="h6" color={"gray"} textAlign={"center"} > Create New Book</Typography>

    <TextField sx={{mb:"5px"}} fullWidth id="standard-basic" label="Book Name" variant="standard" />
    <TextField sx={{mb:"5px"}} fullWidth id="standard-basic" label="Author Name" variant="standard" />
    <TextField sx={{mb:"5px"}} fullWidth id="standard-basic" label="Pubisher" variant="standard" />
    <TextField sx={{mb:"5px"}} fullWidth id="standard-basic" label="Number of Pages" variant="standard" />
    <TextField sx={{mb:"5px"}} fullWidth id="standard-basic" label="Notes" variant="standard" />
    <TextField
    fullWidth
          id="standard-multiline-static"
          label="Abstract"
          multiline
          rows={5}
          defaultValue=""
          variant="standard"
        />
        <Stack  spacing={2}>
            <Box display={"flex"}>
  <Button fullWidth variant="outlined" color="primary">Add</Button>
  <Button  fullWidth variant="outlined"color="secondary">Clear</Button>

            </Box>


</Stack>
  
  </Box>
</StyledModal>
    </div>
  );
};

export default Add;
