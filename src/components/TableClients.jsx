import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { FormEditUser } from "./FormEditUser";
import { DeleteAlert } from "./DeleteAlert";


const TableClients = ({ Client }) => {

    const [clients, setClients] = useState([]);
    const [limit, setLimit] = useState(15);
    const [offset, setOffset] = useState(0);
    const [disabledNext, setDisabledNext] = useState(false)
    const [disabledPrevious, setDisabledPrevious] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [children, setChildren] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            const response = await Client.get("clients");
            setClients(response);
        }
        fetchClients();
    }, []);

    const handleNext = () => {
        if (limit < clients.length) {
            setDisabledPrevious(false);
            setLimit(limit + 15);
            setOffset(offset + 15);

            if (limit + 15 >= clients.length) {
                setDisabledNext(true);
            }

        }
    }
    const handlePrevious = () => {
        if (offset > 15) {
            setDisabledNext(false);
            setLimit(limit - 15);
            setOffset(offset - 15);
        }
        else {
            setOffset(0);
            setLimit(15);
            setDisabledPrevious(true);
        }
    }

    const handleOpenModal = (client, typeModal) => {
        switch (typeModal) {
            case "Edit":
                setShowModal(true);
                setChildren(<FormEditUser initialClient={client} onClose={() => setShowModal(false)} client={Client} setShowModal={setShowModal} />);
                break;
            case "Delete":
                setShowDeleteAlert(true);
                break;
            default:
                break;

        }
    }

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID Cliente
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Telefono
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {clients.slice(offset, limit).map((client, id) => (
                        <tr key={`Client # ${id}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {client.clienteid}
                            </th>
                            <td className="px-6 py-4">
                                {client.nombre}
                            </td>
                            <td className="px-6 py-4">
                                {client.email}
                            </td>
                            <td className="px-6 py-4">
                                {client.telefono}
                            </td>
                            <td className="px-6 py-4">
                                <button className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700" onClick={() => handleOpenModal(client, "Edit")}>Editar</button>

                                <button className="px-4 py-2 mx-1 bg-red-500 text-white rounded-lg hover:bg-red-700" onClick={() => handleOpenModal(client, "Delete")}>Eliminar</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="px-6 py-4 text-center">
                            <button onClick={handlePrevious} className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400" disabled={disabledPrevious}>Anterior</button>
                            <button onClick={handleNext} className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400" disabled={disabledNext}>Siguiente</button>
                        </td>
                    </tr>
                </tfoot>
            </table>

            {showModal && <Modal showModal={showModal} setShowModal={setShowModal}>{children}</Modal>}
            {showDeleteAlert && <DeleteAlert client={Client} color="red" showAlert={showDeleteAlert} setShowAlert={setShowDeleteAlert} />}
        </div>

    )
}

export { TableClients }