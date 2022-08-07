import Cross from "../svgs/Cross";
import Pencil from "../svgs/Pencil";
import { Badge, ButtonRow, ColumnRow, RowContainer } from "./styles";

interface ITableRow {
  user: {
    username: string;
    email: string;
    company: string;
    website: string;
  };
}

export const TableRow = ({ user }: ITableRow) => {
  return (
    <RowContainer>
      <ColumnRow key={Math.random() * 10}>
        {user.username.toUpperCase()}
      </ColumnRow>
      <ColumnRow key={Math.random() * 10}>{user.email.toUpperCase()}</ColumnRow>
      <ColumnRow key={Math.random() * 10}>
        {user.company.toUpperCase()}
      </ColumnRow>
      <ColumnRow key={Math.random() * 10}>
        <Badge>{user.website.toUpperCase()}</Badge>
      </ColumnRow>
      <ColumnRow key={Math.random() * 10}>
        <ButtonRow>
          <Pencil />
        </ButtonRow>
        <ButtonRow>
          <Cross />
        </ButtonRow>
      </ColumnRow>
    </RowContainer>
  );
};
