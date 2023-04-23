import withAuth from '../../lib/withAuth';
import Layout from '../../components/Layout';

const Reservaciones = () => {
  return (
    <Layout>
      <h2>Reservaciones</h2>
      <p>Aquí se muestra el contenido de Reservaciones.</p>
    </Layout>
  );
};

export default withAuth(Reservaciones);