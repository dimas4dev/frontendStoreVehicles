import { TableConcessionaries } from "../components/TableConcessionaries";

const Concessionaries = ({ Client }) => {

    return (
        <section className="container mx-auto">
            <TableConcessionaries Client={Client} />
        </section>
    )
}

export { Concessionaries }