import styled from "styled-components";
import { DARK_PURPLE, FONT_BOLD } from "../../styles/theme";

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <HeadingWrapper>
      <img className="heading-icon" src="/images/icon-star.svg" />
      {props.title}
    </HeadingWrapper>
  );
};

export default Heading;

const HeadingWrapper = styled.h1`
  font-weight: ${FONT_BOLD};
  font-size: 56px;
  color: ${DARK_PURPLE};

  @media (max-width: 375px) {
    font-size: 32px;
  }

  .heading-icon {
    width: 40px;
    height: 40px;
    margin-right: 24px;

    @media (max-width: 375px) {
      width: 24px;
      height: 24px;
    }
  }
`;
