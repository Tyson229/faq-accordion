import { useState } from "react";
import styled from "styled-components";
import { FONT_SEMIBOLD } from "../../styles/theme";

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <AccordionWrapper
      isOpen={isAccordionOpen}
      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
    >
      <div className="accordion-heading">
        <p className="accordion-heading_title">{props.title}</p>
        <button className="accordion-heading_button">
          <img
            src={
              isAccordionOpen
                ? "/images/icon-minus.svg"
                : "/images/icon-plus.svg"
            }
          />
        </button>
      </div>
      <div className="accordion-description">{props.description}</div>
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div<{ isOpen: boolean }>`
  width: 100%;

  .accordion-heading {
    display: flex;
    width: 100%;
    justify-content: space-between;

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
    font-size: 16px;
    color: #8b6990;

    @media (max-width: 375px) {
      font-size: 14px;
    }
  }
`;
