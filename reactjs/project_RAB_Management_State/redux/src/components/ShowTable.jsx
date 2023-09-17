import { Table } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteData,
  getData,
  editVolume,
  updateVolume,
  editData,
} from "../config/actions/Actionrab";
import { useNavigate } from "react-router";

export default function ShowTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState({
    id: "",
    name: "",
    volume: "",
    price: "",
  });

  const {
    getDataResult,
    getLoading,
    deleteDataResult,
    editVolumeResult,
    updateVolumeResult,
  } = useSelector((state) => state.reducer);
  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    if (editVolumeResult) {
      setDataList(editVolumeResult);
    }
  }, [editVolumeResult]);

  useEffect(() => {
    if (updateVolumeResult || deleteDataResult) {
      dispatch(getData());
    }
  }, [updateVolumeResult, deleteDataResult]);

  const handleEdit = (id) => {
    dispatch(editVolume(id));
  };

  const handleSubmitVolume = () => {
    dispatch(updateVolume(dataList));
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const handleEditData = async (id) => {
    await dispatch(editData(id));
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <div className="space-y-4 mb-12 mx-auto self-center">
        <h3 className="text-2xl font-medium">Edit Volume</h3>
        <input
          type="text"
          name="volume"
          value={dataList.volume}
          onChange={(e) => setDataList({ ...dataList, volume: e.target.value })}
          className="rounded-md"
          placeholder="Edit Volume"
        />
        <button
          onClick={handleSubmitVolume}
          className="bg-cyan-700 px-4 py-2 text-white ml-2 rounded-md"
        >
          Simpan
        </button>
      </div>

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Uraian Pekerjaan</Table.HeadCell>
          <Table.HeadCell>Volume</Table.HeadCell>
          <Table.HeadCell>Harga Satuan</Table.HeadCell>
          <Table.HeadCell>Harga</Table.HeadCell>
          <Table.HeadCell>Aksi</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y ">
          {getLoading ? (
            <p>Loading...</p>
          ) : (
            getDataResult &&
            getDataResult.map((data, index) => (
              <>
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {data.name}
                  </Table.Cell>
                  <Table.Cell>{data.volume}</Table.Cell>
                  <Table.Cell>{data.price}</Table.Cell>
                  <Table.Cell>{data.volume * data.price}</Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <Dropdown label="Edit">
                      <Dropdown.Item onClick={() => handleEdit(data.id)}>
                        Volume
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleEditData(data.id)}>
                        Edit Data
                      </Dropdown.Item>
                    </Dropdown>
                    <Button onClick={() => handleDelete(data.id)}>
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </>
            ))
          )}
        </Table.Body>
      </Table>
    </>
  );
}
