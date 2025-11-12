import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import RoiForm from "./components/RoiForm.jsx";
import ResultsCard from "./components/ResultsCard.jsx";
import Footer from "./components/Footer.jsx";
import { placeholderRoiCalc } from "./utils/calc.js";

export default function App() {
  const [results, setResults] = useState(null);
  const [note, setNote] = useState("");

  function handleCalculate(formValues) {
    const r = placeholderRoiCalc(formValues);
    setResults(r);
    setNote("Place Holder for now");
    // Optionally scroll to results:
    document
      .getElementById("results")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleReset() {
    setResults(null);
    setNote("");
  }
  //
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        //Todo: need background and some image to make the website look more
        interesting
        <Section id="problem" title="About the problem">
          <p>
            Groundwater levels in California’s Central Valley are critically
            low. This tool helps evaluate whether converting unused acreage into
            a recharge basin could be viable for you.
          </p>
        </Section>
        <Section id="solution" alt title="About the solution">
          <p>
            Recharge basins capture water and allow it to percolate back into
            the aquifer. In later phases we’ll connect maps/soil data and refine
            the economics with CWI’s spreadsheet logic.
          </p>
        </Section>
        <section id="roi" className="section">
          <div className="container grid grid--2">
            <div>
              <h3>Find your ROI</h3>
              <RoiForm onCalculate={handleCalculate} onReset={handleReset} />
            </div>
            <ResultsCard results={results || {}} note={note} />
          </div>
        </section>
        <Section id="about-cwi" alt title="About CWI">
          <p>
            The California Water Institute (CWI) is located at California State
            University, Fresno and focuses on all aspects of sustainable water
            resource management solutions through outreach, entrepreneurship,
            education, testing, and interdisciplinary research.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
