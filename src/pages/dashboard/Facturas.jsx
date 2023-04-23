// pages/dashboard/Facturas.js
import withAuth from '../../lib/withAuth';
import Layout from '../../components/Layout';

const Facturas = () => {
  return (
    <Layout>
      <h2>Facturas</h2>
      <p>Aquí se muestra el contenido de Facturas.</p>
    </Layout>
  );
};

export default withAuth(Facturas);