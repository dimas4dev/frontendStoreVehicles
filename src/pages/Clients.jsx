import React from "react";
import { TableClients } from "../components/TableClients";

const Clients = ({ Client }) => {

    return (
        <section className="container mx-auto">
            <TableClients Client={Client} />
        </section>
    )
}

export { Clients }