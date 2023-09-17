import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productSelectors,
  deleteProducts,
} from "../features/ProductSlice";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);
  //   const { title, price } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="p-4">
      <Link to="/add" className="btn btn-primary mb-2">
        Add Data
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`edit/${product.id}`} className="btn btn-primary">
                  Edit
                </Link>
                <button
                  onClick={() => dispatch(deleteProducts(product.id))}
                  className="mx-2 btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <h3>Title : {title}</h3>
      <h3>Title : {price}</h3> */}
    </div>
  );
};

export default ShowProduct;
