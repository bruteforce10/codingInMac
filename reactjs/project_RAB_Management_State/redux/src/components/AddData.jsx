import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { putAddData, putData } from "../config/actions/Actionrab";

export default function AddData() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { editDataResult } = useSelector((state) => state.reducer);
  const [addDataList, setAddDataList] = useState({
    id: "",
    name: "",
    price: "",
    volume: 1,
  });

  useEffect(() => {
    if (editDataResult) {
      setAddDataList(editDataResult);
    } else {
      axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
        setAddDataList(res.data);
      });
    }
  }, []);

  const handleChange = (e) => {
    setAddDataList({ ...addDataList, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await dispatch(putAddData(addDataList));
      navigate("/");
    } else {
      setAddDataList({ name: "", price: "", volume: "" });
      await dispatch(putData(addDataList));
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-[600px] flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label value="Name" />
        </div>
        <TextInput
          placeholder="input your name"
          required
          type="text"
          name="name"
          value={addDataList.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Price" />
        </div>
        <TextInput
          placeholder="input your Price"
          required
          type="number"
          value={addDataList.price}
          name="price"
          onChange={handleChange}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
