import { ModalBody, Title, Container, Hr, Label } from "./styled";

export const ModalOptions = () => {
  return (
    <ModalBody>
      <Title>Linhas por página</Title>

      <Container>
        <Label>
          <input type="checkbox" />
          <span>Padrão</span>
        </Label>

        <Label>
          <input type="checkbox" />
          <span>50 linhas</span>
        </Label>
      </Container>
      <Hr />
      <Title>Colunas</Title>
      <Container>
        <Label>
          <input type="checkbox" />
          <span>Usuário</span>
        </Label>

        <Label>
          <input type="checkbox" />
          <span>Email</span>
        </Label>

        <Label>
          <input type="checkbox" />
          <span>Cliente</span>
        </Label>

        <Label>
          <input type="checkbox" />
          <span>Perfil de acesso</span>
        </Label>
      </Container>
    </ModalBody>
  );
};
