import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";

import "./login.css";
import useAuthEmployees from "../../hooks/useAuthEmployees";

const Login = () => {
  const [employeeCredentials, setEmployeeCredentials] = useState({
    username: "",
    password: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data, login } = useAuthEmployees();
  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.isLogged === true) {
      navigate("/clients/table");
    }
    if (data !== undefined && data.isLogged !== true) {
      setIsDialogOpen(true);
    }
  }, [data]);

  const modalClose = () => {
    setIsDialogOpen(false);
  };

  const changeValueForm = (e) => {
    const { name, value } = e.target;
    setEmployeeCredentials({ ...employeeCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(employeeCredentials);
    } catch (error) {}
  };

  return (
    <div className="login-container">
      <Dialog
        className="error-dialog"
        header="Error al autentificar"
        visible={isDialogOpen}
        style={{ width: "50vw", textAlign: "center" }}
        closable={false}
        onHide={modalClose}
        footer={
          <div style={{ textAlign: "center" }}>
            <Button
              value={employeeCredentials.username}
              onClick={modalClose}
              label="Reintentar"
              type="submit"
              severity="success"
            />
          </div>
        }
      >
        <p>{data?.message}</p>
      </Dialog>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="user-container">
          <label className="user-label">Usuario</label>
          <InputText
            className="user-input"
            name="username"
            value={employeeCredentials.username}
            onChange={changeValueForm}
          />
        </div>
        <div className="password-container">
          <label className="password-label">Contraseña</label>
          <Password
            className="password-input"
            name="password"
            value={employeeCredentials.password}
            onChange={changeValueForm}
            toggleMask
            feedback={false}
          />
        </div>
        <Button
          className="btn-submit"
          value={employeeCredentials.username}
          label="Entrar"
          type="submit"
          severity="success"
        />
      </form>
    </div>
  );
};

export default Login;
