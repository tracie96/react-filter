import React from "react";
import { Form } from "react-bootstrap";

export const props =()=> {
 
  let { placeholder, name, value, onChange = () => null } = props;
  return (
    <Form.Group>
      <Form.Control
        placeholder={placeholder}
        name={name}
        value={value ? value : ""}
        onChange={onChange}
    
      />
    </Form.Group>
  );
};
