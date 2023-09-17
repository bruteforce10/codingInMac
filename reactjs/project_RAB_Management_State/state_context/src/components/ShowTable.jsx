import { Table } from "flowbite-react";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import { Dropdown } from "flowbite-react";
import { Button } from "flowbite-react";

export default function ShowTable() {
  const {
    data,
    loading,
    getData,
    isVolume,
    setVolumeData,
    VolumeData,
    handleEditVolume,
    handleVolume,
    isUpdate,
    deleteData,
    handleEdit,
  } = useAppContext();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [isUpdate]);

  return (
    <>
      {!isVolume && (
        <>
          <div className="space-y-4 mb-12 mx-auto self-center">
            <h3 className="text-2xl font-medium">Edit Volume</h3>
            <input
              type="number"
              name="volume"
              onChange={(e) =>
                setVolumeData({ ...VolumeData, volume: e.target.value })
              }
              value={VolumeData.volume}
              className="rounded-md"
              placeholder="Edit Volume"
            />
            <button
              onClick={handleEditVolume}
              className="bg-cyan-700 px-4 py-2 text-white ml-2 rounded-md"
            >
              Simpan
            </button>
          </div>
        </>
      )}

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
          {!loading ? (
            <p>Loading....</p>
          ) : (
            data &&
            data.map((item, index) => (
              <>
                <Table.Row
                  key={item.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </Table.Cell>
                  <Table.Cell>{item.volume}</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell>{item.price * item.volume}</Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <Dropdown label="Edit">
                      <Dropdown.Item onClick={() => handleVolume(item.id)}>
                        Volume
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleEdit(item.id)}>
                        Edit Data
                      </Dropdown.Item>
                    </Dropdown>
                    <Button onClick={() => deleteData(item.id)} color="failure">
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
