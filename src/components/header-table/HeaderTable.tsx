import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import PropTypes from "prop-types";
import "./headerTable.css";

const HeaderTable = ({ globalFilterValue, onGlobalFilterChange }: any) => {
  return (
    <div className="container-header-table">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          className="filter"
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Buscar Cliente..."
        />
      </span>
      <span className="btn-group">
        <Button
          className="btn-header"
          icon="pi pi-plus"
          label="Nuevo Cliente"
          severity="success"
        />
        <Button
          className="btn-header"
          icon="pi pi-pencil"
          label="Modificar Cliente"
          type="submit"
          severity="warning"
        />
        <Button
          className="btn-header"
          icon="pi pi-id-card"
          label="Ficha Cliente"
          type="submit"
          severity="info"
        />
        <Button
          className="btn-header"
          icon="pi pi-trash"
          label="Eliminar Cliente"
          type="submit"
          severity="danger"
        />
        <Button
          className="btn-header"
          icon="pi pi-print"
          label="Imprimir Documentación"
          type="submit"
          severity="secondary"
        />
      </span>
    </div>
  );
};

export default HeaderTable;

HeaderTable.propTypes = {
  globalFilterValue: PropTypes.string,
  onGlobalFilterChange: PropTypes.func,
};
