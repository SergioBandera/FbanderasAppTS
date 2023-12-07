import { Button } from "primereact/button";

const Header = () => {
  return (
    <div>
      <span className="p-buttonset ">
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
          icon="pi pi-print"
          label="Imprimir Documentación"
          type="submit"
          severity="secondary"
        />
        <Button
          className="btn-header"
          icon="pi pi-trash"
          label="Eliminar Cliente"
          type="submit"
          severity="danger"
        />
      </span>
    </div>
  );
};

export default Header;
