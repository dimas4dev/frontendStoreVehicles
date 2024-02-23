import StoreVehicleIcon from "./assets/mantenimiento.svg"
import LogoutIcon from "./assets/logout.svg"
const Header = () => {
    return (
        <header className="flex justify-between m-4">
            <div className="flex items-center">
                <img className="w-14" src={StoreVehicleIcon} alt="Icon Store" />
                <h1 className="font-bold text-lg">Store Vehicles</h1>
            </div>
            <nav className="flex items-center">
                <ul className="flex font-semibold justify-evenly items-center">
                    <li className="px-4 hover:text-cyan-600"><a href="">Clientes</a></li>
                    <li className="px-4 hover:text-cyan-600"><a href="">Concesionarios</a></li>
                    <li className="px-4 hover:text-red-600">Cerrar Sesion</li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }