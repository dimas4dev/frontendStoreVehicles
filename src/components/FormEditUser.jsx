import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormEditUser = ({ initialClient, onSubmit, client, setShowModal }) => {
    const [cliente, setCliente] = useState(initialClient);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Asegúrate de mantener el estado anterior del cliente cuando actualices un campo
        setCliente(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Asumiendo que client.patch es una promesa, deberías esperar a que se complete
            await client.patch(`clients/${cliente.clienteid}`, cliente);
            // Notificar éxito
            toast.success('Cliente Actualizado', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            // Cerrar modal y/o realizar acciones adicionales después de la actualización exitosa
            setShowModal(false);
        } catch (error) {
            // Notificar error
            toast.error('Error al actualizar el cliente', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow">
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    value={cliente.nombre}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={cliente.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="telefono" className="block text-gray-700 text-sm font-bold mb-2">Teléfono:</label>
                <input
                    id="telefono"
                    type="text"
                    name="telefono"
                    value={cliente.telefono}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Actualizar Cliente
            </button>
        </form>

    );
};

export { FormEditUser };
