import { useEffect } from "react";
import scrollama from "scrollama";

export default function ScrollSteps({ steps, onStep }) {
  useEffect(() => {
    const scroller = scrollama();

    setTimeout(() => {
      scroller
        .setup({
          step: ".step",
          offset: 0.6,
          debug: false,
        })
        .onStepEnter(({ index }) => {
          console.log("✅ Entered step:", index);
          onStep(index);
        });
    }, 500); // Wait for layout to settle

    return () => {
      scroller.destroy();
    };
  }, [onStep]);

  return (
    <section className="max-w-xl mx-auto px-6 pt-40 bg-white">
      {steps.map((text, i) => (
        <div
          key={i}
          className="step"
          style={{
            marginTop: i === 0 ? "10vh" : "60vh",
            marginBottom: i === steps.length - 1 ? "20vh" : "60vh",
            padding: "2rem",
            backgroundColor: i % 2 === 0 ? "#eef" : "#efe",
            minHeight: "50vh",
            border: "1px solid #ccc",
          }}
        >
          <h2>Step {i + 1}</h2>
          <p>{text}</p>
        </div>
      ))}
    </section>
  );
}