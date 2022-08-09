import jwtDecode from "jwt-decode";

exports.getTokenData = (token) => {
  const decoded = jwtDecode(token);
  if (!decoded) {
    return null;
  }
  return decoded;
};
