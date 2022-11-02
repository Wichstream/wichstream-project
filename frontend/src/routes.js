// Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Streams from "layouts/streams";
import Conteudos from "layouts/conteudos";
import Reviews from "layouts/reviews";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import SignOut from "layouts/authentication/sign-out";

// Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: Dashboard,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Streams",
    key: "streams",
    route: "/streams",
    icon: <Office size="12px" />,
    component: Streams,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Conteudos",
    key: "conteudos",
    route: "/conteudos",
    icon: <CreditCard size="12px" />,
    component: Conteudos,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Reviews",
    key: "reviews",
    route: "/reviews",
    icon: <Cube size="12px" />,
    component: Reviews,
    noCollapse: true,
    protected: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Perfil",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: Profile,
    noCollapse: true,
    protected: true,
  },
  {
    type: "none",
    name: "Entrar",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: SignIn,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Cadastro",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: SignUp,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sair",
    key: "sign-out",
    route: "/authentication/sign-out",
    icon: <SpaceShip size="12px" />,
    component: SignOut,
    noCollapse: true,
  },
];

export default routes;
