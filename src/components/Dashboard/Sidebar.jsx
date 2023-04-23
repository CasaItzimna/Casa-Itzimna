import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/dashboard/reservaciones">
            <a>Reservaciones</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/facturas">
            <a>Facturas</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;