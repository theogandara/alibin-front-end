import ThreePoints from "../svgs/ThreePoints";
import { Button, ColumnHeader, HeaderContainer, RowContainer } from "./styles";

interface ITableHeader {
  columns: string[];
}

export const TableHeader = ({ columns }: ITableHeader) => {
  return (
    <HeaderContainer>
      <RowContainer>
        {columns.map((column) => (
          <ColumnHeader key={Math.random() * 10}>{column}</ColumnHeader>
        ))}
        <Button>
          <ThreePoints />
        </Button>
      </RowContainer>
    </HeaderContainer>
  );
};
