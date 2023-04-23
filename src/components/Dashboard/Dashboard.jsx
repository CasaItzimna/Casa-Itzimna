import withAuth from '../lib/withAuth';
import Layout from './Layout';

const Dashboard = ({ user }) => {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <p>Bienvenido, {user.email}</p>
    </Layout>
  );
};

export default withAuth(Dashboard);