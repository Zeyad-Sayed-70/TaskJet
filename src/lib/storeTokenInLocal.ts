export function storeTokenInLocal(token: string) {
  window.localStorage.setItem("auth-token", token);
}
