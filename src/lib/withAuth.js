// lib/withAuth.js
import jwtDecode from 'jwt-decode';

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const token = localStorage.getItem('auth_token'); // Recupera el token JWT del almacenamiento local

    // Si no hay token, redirige al usuario a la página de inicio de sesión
    useEffect(() => {
      if (!token) {
        router.push('/login');
      }
    }, []);

    // Si no hay token, no renderiza el componente WrappedComponent
    if (!token) {
      return null;
    }

    const user = jwtDecode(token); // Decodifica el token JWT para obtener la información del usuario
    return <WrappedComponent {...props} user={user} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
