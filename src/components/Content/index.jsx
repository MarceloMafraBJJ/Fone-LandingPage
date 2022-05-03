import { Container,
   SectionFone,
    Fone,
     Informations,
      SubInformations,
       Title,
        SubTitle,
         Stars,
          Evaluation,
          SubInformationsDescription,
          Description,
          Finish,
          Button,
          Price
         } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Content = () => {
  return (
    <Container>
      <SectionFone>
        <Fone />
      </SectionFone>

      <Informations>

        <Title>hyper x on-ear</Title>
        <SubTitle>Wireless over-ear headphones</SubTitle>
        <SubInformations>
          <Stars>
            <ul>
              <li>
                <FontAwesomeIcon icon={faStar} />
              </li>
              <li>
                <FontAwesomeIcon icon={faStar} />
              </li>
              <li>
                <FontAwesomeIcon icon={faStar} />
              </li>
              <li>
                <FontAwesomeIcon icon={faStar} />
              </li>
            </ul>
          </Stars>
          <Evaluation> 4.9 (335) </Evaluation>
        </SubInformations>

        <SubInformationsDescription>
        <SubTitle>Driver unit</SubTitle>
        <Description> 70mm, dome type (CCAW Voice Col)</Description>
        </SubInformationsDescription>

        <SubInformationsDescription>
        <SubTitle>Frequency Response</SubTitle>
        <Description>4 Hz + 100.000 Hz </Description>
        </SubInformationsDescription>

        <Finish>
          <Price>$89.99</Price>
          <Button>ADD TO CART</Button>
        </Finish>


      </Informations>
    </Container>
  );
};

export default Content;
