import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import HeaderTable from "../header-table/HeaderTable";
import { FilterMatchMode } from "primereact/api";

const ClientsTable = ({ clientsList, clientsError }: any) => {
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [seleccionCliente, setSeleccionCliente] = useState();

  useEffect(() => {
    console.log("clientes seleccionado", seleccionCliente);
  }, [seleccionCliente]);

  useEffect(() => {
    if (clientsList) {
      initFilters();
    }
  }, [clientsList]);

  const onGlobalFilterChange = (e: any) => {
    const value = e.target.value;
    const _filters = { ...filters };
    _filters["global"].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    setGlobalFilterValue("");
  };

  return (
    <DataTable
      value={clientsList}
      header={
        <HeaderTable
          globalFilterValue={globalFilterValue}
          onGlobalFilterChange={onGlobalFilterChange}
        />
      }
      globalFilterFields={["empresa.comercio", "empresa.empresa", "tipo"]}
      filterDisplay="menu"
      emptyMessage={"No se han encontrado clientes"}
      dataKey="_id"
      // responsiveLayout="scroll"
      filters={filters}
      paginator
      rows={5}
      showGridlines
      selectionMode="single"
      reorderableColumns
      resizableColumns
      onSelectionChange={(e: any) => setSeleccionCliente(e.value)}
    >
      <Column
        field="empresa.comercio"
        header="Nombre Comercial"
        filterField="empresa.comercio"
      />
      <Column field="empresa.empresa" header="Nombre Empresa" />
      <Column field="tipo" header="Tipo" />
    </DataTable>
  );
};

export default ClientsTable;

ClientsTable.propTypes = {
  clientsList: PropTypes.array,
  clientsError: PropTypes.array,
};
