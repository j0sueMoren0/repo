import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import { Link, Button, Spacer } from "@chakra-ui/react";
import { BiArchive, BiUserPlus, BiAddToQueue } from "react-icons/bi";
function Apoyos() {
  const rows = [
    {
      id: "a",
      name: "Load balancer 1",
      status: "Disabled",
    },
    {
      id: "b",
      name: "Load balancer 2",
      status: "Starting",
    },
    {
      id: "c",
      name: "Load balancer 3",
      status: "Active",
    },
  ];

  const headers = [
    {
      key: "Nombre",
      header: "Nombre",
    },
    {
      key: "Estado",
      header: "Estado",
    },
  ];
  let rutas = [
    {
      url: "/Apoyos",
      nombre: "Apoyo",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold titulo="Apoyos" descripcion="Catalogo de apoyos" rutas={rutas}>
      <div style={{ margin: "2rem" }}>
        <Link href="/apoyos/agregarApoyo">
          <a>
            <Button
              leftIcon={<BiAddToQueue size="40px " />}
              colorScheme="teal"
              m={5}
            >
              Agregar Apoyo
            </Button>
          </a>
        </Link>
        <IBMDataTable headers={headers} rows={rows} />
      </div>
    </Scaffold>
  );
}

export default Apoyos;
