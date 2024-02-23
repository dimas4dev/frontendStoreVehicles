import React, { useEffect, useState } from "react";

const TableConcessionaries = ({ Client }) => {

    const [concesionaries, setConcesionaries] = useState([]);
    const [limit, setLimit] = useState(15);
    const [offset, setOffset] = useState(0);
    const [disabledNext, setDisabledNext] = useState(false)
    const [disabledPrevious, setDisabledPrevious] = useState(true)

    useEffect(() => {
        const fetchConcesionaries = async () => {
            const response = await Client.get("concessionaires");
            setConcesionaries(response);
        }
        fetchConcesionaries();

        if (concesionaries.length <= 15) {
            setDisabledNext(true);
        }
    }, []);

    const handleNext = () => {
        if (limit < concesionaries.length) {
            setDisabledPrevious(false);
            setLimit(limit + 15);
            setOffset(offset + 15);

            if (limit + 15 >= concesionaries.length) {
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


    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID Concesionario
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre Concesionario
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Direccion Concesionario
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ciudad del Concesionario
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {concesionaries.slice(offset, limit).map((concessionarie, id) => (
                        <tr key={`Client # ${id}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {concessionarie.concesionarioid}
                            </th>
                            <td className="px-6 py-4">
                                {concessionarie.nombre}
                            </td>
                            <td className="px-6 py-4">
                                {concessionarie.direccion}
                            </td>
                            <td className="px-6 py-4">
                                {concessionarie.ciudad}
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
        </div>

    )
}

export { TableConcessionaries }