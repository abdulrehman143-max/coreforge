// Very simple admin auth helpers (demo only - uses browser localStorage, no backend).
const ADMINS_KEY = "coreforge-admins";
const SESSION_KEY = "coreforge-admin-session";

function getAdmins() {
  try {
    return JSON.parse(localStorage.getItem(ADMINS_KEY)) || [];
  } catch {
    return [];
  }
}

// Returns an error message, or "" if the registration worked.
export function registerAdmin(name, email, password) {
  const admins = getAdmins();
  if (admins.some((a) => a.email === email.toLowerCase())) {
    return "An admin with this email already exists.";
  }
  admins.push({ name, email: email.toLowerCase(), password });
  localStorage.setItem(ADMINS_KEY, JSON.stringify(admins));
  return "";
}

// Returns an error message, or "" if the login worked.
export function loginAdmin(email, password) {
  const admin = getAdmins().find((a) => a.email === email.toLowerCase() && a.password === password);
  if (!admin) return "Wrong email or password.";
  localStorage.setItem(SESSION_KEY, JSON.stringify({ name: admin.name, email: admin.email }));
  return "";
}

export function getLoggedInAdmin() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

export function logoutAdmin() {
  localStorage.removeItem(SESSION_KEY);
}
