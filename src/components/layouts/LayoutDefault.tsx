import { Background } from "./styles";
import { ReactNode } from "react";

interface IlayoutDefault {
  children: ReactNode;
}

export const LayoutDefault = ({ children }: IlayoutDefault) => {
  return <Background>{children}</Background>;
};
