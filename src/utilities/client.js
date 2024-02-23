/**
 * Clase ApiClient que implementa el patrón de diseño Singleton.
 * Este patrón asegura que solo exista una instancia de ApiClient en la aplicación,
 * proporcionando un único punto de acceso global a esta instancia.
 *
 * @class
 */
class ApiClient {
    /**
     * La única instancia de ApiClient.
     * @static
     * @private
     */
    static instance;

    /**
     * Constructor de la clase ApiClient.
     * Si ya existe una instancia de ApiClient, devuelve esa instancia en lugar de crear una nueva.
     * Esto impide la creación de múltiples instancias de la clase.
     *
     * @param {string} baseUrl - La URL base de la API a la cual este cliente se conectará.
     */
    constructor(baseUrl) {
        if (ApiClient.instance) {
            return ApiClient.instance;
        }

        this.baseUrl = baseUrl;
        ApiClient.instance = this;
    }

    /**
     * Realiza una petición GET a la API.
     * 
     * @async
     * @param {string} path - El camino específico a ser agregado a la baseUrl para la petición.
     * @returns {Promise<Object|null>} La respuesta de la API como un objeto o null en caso de error.
     */
    async get(path) {
        try {
            const response = await fetch(this.baseUrl + path);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async post(path, data) {
        // Implementación de la petición POST.
        try {
            const response = await fetch(this.baseUrl + path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }

    async put(path, data) {
        // Implementación de la petición PUT.
        try {
            const response = await fetch(this.baseUrl + path, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }

    async delete(path) {
        // Implementación de la petición DELETE.
        try {
            const response = await fetch(this.baseUrl + path, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}

export { ApiClient };
