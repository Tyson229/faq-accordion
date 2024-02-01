import { useState } from "react";
import styled from "styled-components";
import { FONT_SEMIBOLD, WHITE } from "../../styles/theme";

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <AccordionWrapper
      className="accordion"
      isOpen={isAccordionOpen}
      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
    >
      <div className="accordion-heading">
        <p className="accordion-heading_title">{props.title}</p>

        <img
          className="accordion-heading_button"
          src={
            isAccordionOpen ? "/images/icon-minus.svg" : "/images/icon-plus.svg"
          }
        />
      </div>
      <div className="accordion-description">{props.description}</div>
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div<{ isOpen: boolean }>`
  width: 100%;

  & + & {
    border-top: 1px solid #f8eeff;
  }

  .accordion-heading {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
    background: ${WHITE};

    @media (max-width: 375px) {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    &_title {
      font-size: 18px;
      font-weight: ${FONT_SEMIBOLD};

      @media (max-width: 375px) {
        font-size: 16px;
      }
    }

    &_button {
      padding: 5px;
    }
  }

  .accordion-description {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    font-size: 16px;
    color: #8b6990;

    @media (max-width: 375px) {
      font-size: 14px;
    }
  }
`;
