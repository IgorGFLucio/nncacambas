import styled from 'styled-components';
// import Navbar from '@global-components/Navbar';
import NavbarSmall from '@global-components/NavbarSmall';

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

const Wrap = styled.div`
  flex: 1 1 0%;
  background-color: #e2e8f0;
  margin-top: 5.6rem;
`;

const Default = ({ children }: Props) => {
  return (
    <Container>
      <NavbarSmall />
      <Wrap>
        <div>{children}</div>
      </Wrap>
    </Container>
  );
};

export default Default;
