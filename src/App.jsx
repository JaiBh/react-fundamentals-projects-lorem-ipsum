import { useState } from "react";
import textList from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(textList.slice(0, count));
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          value={count}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => (
          <p key={nanoid()}>{item}</p>
        ))}
      </article>
    </section>
  );
};
export default App;
