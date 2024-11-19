import axios from 'axios';

// Configuración base de Axios
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URI, // Cambia esto a tu URL base
  withCredentials: true, // Permite el envío automático de cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Obtener el token CSRF desde la cookie
const getCsrfToken = () => {
  const name = 'csrftoken';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null; // Retorna null si no se encuentra la cookie
};

// Interceptor para agregar el token CSRF en las solicitudes
apiClient.interceptors.request.use((config) => {
  const csrfToken = getCsrfToken();
  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  return config;
});

export default apiClient;
