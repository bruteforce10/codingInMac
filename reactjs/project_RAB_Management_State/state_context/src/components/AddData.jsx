import { Button, Label, TextInput } from "flowbite-react";
import { useAppContext } from "../context/AppContext";

export default function AddData() {
  const { handleChange, handleSubmit, inputData } = useAppContext();

  return (
    <form className="flex w-[600px] flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label value="Name" />
        </div>
        <TextInput
          placeholder="input your name"
          required
          type="text"
          onChange={handleChange}
          name="name"
          value={inputData.name}
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
          onChange={handleChange}
          name="price"
          value={inputData.price}
        />
      </div>

      <Button onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </form>
  );
}
