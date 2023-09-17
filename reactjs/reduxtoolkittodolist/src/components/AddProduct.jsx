import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { saveProducts } from "../features/ProductSlice";
import { useNavigate } from "react-router-dom";
// import { update } from "../features/ProductSlice";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(saveProducts({ title, price }));
    navigate("/");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(update({ title, price }));
  // };

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-3">
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Isi Title"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Isi Price"
            value={price}
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
