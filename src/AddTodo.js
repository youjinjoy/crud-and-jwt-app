import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const AddTodo = (props) => {
  // 사용자의 입력을 저장할 오브젝트
  const [item, setItem] = useState([{ title: "" }]);
  const addItem = props.addItem;

  // onButtonClick 함수 작성
  const onButtonClick = () => {
    addItem(item);
    setItem({ title: "" });
  };
  
  // onInputChange 함수 작성
  const onInputChange = (e) => {
    setItem({title: e.target.value});
    console.log(item);
  };

  // enterKeyEventHandler 함수 작성
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  }




  return (
    <Grid container>
    <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
      <TextField
        placeholder="Add Todo here"
        fullWidth
        onChange={onInputChange}
        onKeyUp={enterKeyEventHandler}
        value={item.title}
      />
    </Grid>
    <Grid xs={1} md={1} item>
      <Button
        fullWidth
        style = {{ height: '100%' }}
        color="secondary"
        variant="outlined"
        onClick={onButtonClick}
      >
        +
      </Button>
    </Grid>
  </Grid>
  );
}

export default AddTodo;