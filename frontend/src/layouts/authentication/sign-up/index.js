import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import curved6 from "assets/images/curved-images/curved-7.jpg";

import AuthApi from "../../../api/auth";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const [agreement, setAgremment] = useState(true);
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Cadastre-se");
  const [error, setError] = useState(undefined);

  const handleSetAgremment = () => setAgremment(!agreement);

  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (firstName === "") {
      return setError("You must enter your first name.");
    }
    if (email === "") {
      return setError("You must enter your email.");
    }
    if (password === "") {
      return setError("You must enter a password.");
    }
    try {
      setButtonText("Signing up");
      let response = await AuthApi.Register({
        username: firstName,
        email,
        password,
      });
      if (response.data && response.data.success === false) {
        setButtonText("Sign up");
        return setError(response.data.msg);
      }
      return history.push("/authentication/sign-in");
    } catch (err) {
      console.log(err);
      setButtonText("Sign up");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

  return (
    <BasicLayout
      title="Bem Vindo!"
      description="Utilize o formulário abaixo para logar ou criar sua conta."
      image={curved6}
    >
      <Card>
        <SuiBox p={3} mb={1} textAlign="center">
          <SuiTypography variant="h5" fontWeight="medium">
            Cadastre-se
          </SuiTypography>
        </SuiBox>
        <SuiBox pt={2} pb={3} px={3}>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput
                onChange={(event) => {
                  setName(event.target.value);
                  setError(undefined);
                }}
                placeholder="Nome"
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError(undefined);
                }}
                type="email"
                placeholder="Email"
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError(undefined);
                }}
                type="password"
                placeholder="Senha"
              />
            </SuiBox>
            <SuiBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SuiTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                customClass="cursor-pointer user-select-none"
              >
                &nbsp;&nbsp;Aceito os&nbsp;
              </SuiTypography>
              <SuiTypography component="a" href="#" variant="button" fontWeight="bold" textGradient>
                Termos e Condições.
              </SuiTypography>
            </SuiBox>
            <SuiBox mt={2} mb={2} textAlign="center">
              <h6
                style={{
                  fontSize: ".8em",
                  color: "red",
                  textAlign: "center",
                  fontWeight: 400,
                  transition: ".2s all",
                }}
              >
                {error}
              </h6>
            </SuiBox>
            <SuiBox mt={4} mb={1}>
              <SuiButton onClick={register} variant="gradient" buttonColor="dark" fullWidth>
                {buttonText}
              </SuiButton>
            </SuiBox>
            <SuiBox mt={3} textAlign="center">
              <SuiTypography variant="button" textColor="text" fontWeight="regular">
                Já tem um cadastro?&nbsp;
                <SuiTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  textColor="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Acesse aqui
                </SuiTypography>
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
