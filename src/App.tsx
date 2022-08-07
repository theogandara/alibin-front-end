import { Table } from "./components/Table";
import { api } from "./services/api";
import { useEffect, useState } from "react";
import { TableRow } from "./components/TableRow/index";
import { LayoutDefault } from './components/layouts/LayoutDefault';

const App = () => {
  const [users, setUsers] = useState([]);

  const COLUMNS = ["USUÁRIO", "EMAIL", "CLIENTE", "PERFIL DE ACESSO"];

  const getUsers = async () => {
    try {
      const response = await api.get("/users");
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <LayoutDefault>
      <Table columns={COLUMNS}>
        {users.map((user: any) => (
          <TableRow
            user={{
              username: user.username,
              email: user.email,
              company: user.company.name,
              website: user.website,
            }}
            key={Math.random() * 10}
          />
        ))}
      </Table>
    </LayoutDefault>
  );
};

export default App;
