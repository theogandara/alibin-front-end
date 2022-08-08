import { ModalOptions } from "../ModalOptions/ModalOptions";
import ThreePoints from "../svgs/ThreePoints";
import { Button, ColumnHeader, HeaderContainer, RowContainer } from "./styles";
import { useState } from "react";

interface ITableHeader {
  columns: string[];
}

export const TableHeader = ({ columns }: ITableHeader) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderContainer>
      <RowContainer>
        {columns.map((column) => (
          <ColumnHeader key={Math.random() * 10}>{column}</ColumnHeader>
        ))}
        <Button onClick={() => setIsOpen(!isOpen)}>
          <ThreePoints />
        </Button>
        {isOpen && <ModalOptions />}
      </RowContainer>
    </HeaderContainer>
  );
};
