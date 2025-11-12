export default function Section({ id, alt = false, title, children }) {
  return (
    <section id={id} className={`section ${alt ? "section--alt" : ""}`}>
      <div className="container">
        {title ? <h3>{title}</h3> : null}
        {children}
      </div>
    </section>
  );
}
