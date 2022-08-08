import { ModalBody, Title, Container, Hr, Label, Input } from "./styled";

export const ModalOptions = () => {
  return (
    <ModalBody>
      <Title>Linhas por página</Title>

      <Container>
        <Label>
          <Input type="checkbox" />
          <span>Padrão</span>
        </Label>

        <Label>
          <Input type="checkbox" />
          <span>50 linhas</span>
        </Label>
      </Container>
      <Hr />
      <Title>Colunas</Title>
      <Container>
        <Label>
          <Input type="checkbox" />
          <span>Usuário</span>
        </Label>

        <Label>
          <Input type="checkbox" />
          <span>Email</span>
        </Label>

        <Label>
          <Input type="checkbox" />
          <span>Cliente</span>
        </Label>

        <Label>
          <Input type="checkbox" />
          <span>Perfil de acesso</span>
        </Label>
      </Container>
    </ModalBody>
  );
};
