import { ReactNode } from "react";
import { TableHeader } from "../TableHeader";
import { BodyTable, ContainerTable } from "./styles";

interface ITable {
  children: ReactNode;
  columns: string[];
}

export const Table = ({ children, columns }: ITable) => {
  return (
    <ContainerTable>
      <BodyTable>
        <TableHeader columns={columns} />
        {children}
      </BodyTable>
    </ContainerTable>
  );
};
