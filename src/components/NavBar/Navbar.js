/* Importaciones */
import * as React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

/* CSS */
import "./NavBar.css";

/* Material UI */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { title: "Productos", id: 1, url: "/" },
  { title: "Precios", id: 2, url: "/detalle" },
];

const ResponsiveAppBar = () => {
  /* //? State */
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  /* //! Funciones */
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container className="container" maxWidth="xl">
        <Toolbar disableGutters>
          {/* Nombre de la Marca */}
          <Link className="link" to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              ECOMMERS
            </Typography>
          </Link>
          {/* Fin Nombre de la Marca */}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          ></Typography>

          <Box
            className="box"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Link to={page.url} key={page.id}>
                <Button onClick={handleCloseNavMenu}>{page.title}</Button>
              </Link>
            ))}

            {/* //TODO: DASHBOARD */}

            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Categorias
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link to={"/zapatillas"}>
                <MenuItem onClick={handleClose}>Zapatillas</MenuItem>
              </Link>
              <Link to={"/botines"}>
                <MenuItem onClick={handleClose}>Botines</MenuItem>
              </Link>
              <Link to={"/short"}>
                <MenuItem onClick={handleClose}>Short</MenuItem>
              </Link>
              <Link to={"/remeras"}>
                <MenuItem onClick={handleClose}>Remeras</MenuItem>
              </Link>
            </Menu>
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
