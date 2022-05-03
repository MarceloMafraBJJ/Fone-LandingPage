import { Container, Content } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare, faSignal, faBattery } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Container>
      <Content>
        <FontAwesomeIcon icon={faWaveSquare} />
        <h1>High-Resolution Audio<br /> compatible </h1>
      </Content>
      <Content>
        <FontAwesomeIcon icon={faSignal} />
        <h1>Wireless connectivity using <br /> bluetooth </h1>
      </Content>
      <Content>
        <FontAwesomeIcon icon={faBattery} />
        <h1>A powerful baterry that lasts<br />  up to 4 hours of use </h1>
      </Content>
    </Container>
  );
};

export default Footer;
