function login(usuario, clave) {
  if (usuario === "admin" && clave === "1234") {
    return true;
  }
  return false;
}
