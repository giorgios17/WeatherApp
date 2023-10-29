import React, { useState } from 'react';


function InputComponent(props) {
  return (
    <>
     <input
              type="text"
              className="form-control"
              placeholder="Città"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onSubmit={props.setCity}
        />
    </>
  )
}

export default InputComponent