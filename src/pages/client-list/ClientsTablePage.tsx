import React from "react";
import Header from "../../components/header/Header";
import ClientsTable from "../../components/clients-table/ClientsTable";
import { FETCH_LIST_CLIENTS } from "../../constants";
import useFetchApi from "../../hooks/useFetchApi";

const ClientsTablePage = () => {
  const { data: clientsList, error: clientsError } = useFetchApi(
    FETCH_LIST_CLIENTS,
    {}
  );
  return (
    <div>
      <ClientsTable clientsList={clientsList} clientsError={clientsError} />
    </div>
  );
};

export default ClientsTablePage;
