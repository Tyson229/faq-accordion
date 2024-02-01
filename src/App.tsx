import Accordion from "./components/accordion/Accordion";
import Heading from "./components/heading/Heading";
import { ACCORDION_DATA } from "./lib/data";

function App() {
  return (
    <>
      <Heading title="FAQs" />;
      {ACCORDION_DATA.map(({ heading, description }, i) => (
        <Accordion title={heading} description={description} key={i} />
      ))}
    </>
  );
}

export default App;
