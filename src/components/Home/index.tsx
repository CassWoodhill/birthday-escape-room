import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./Home.module.scss";


export function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();

  const submitAnswer = useCallback(() => {
    if (inputValue.trim() === "62473") {
      navigate("/success")
    } else {
      navigate("/oops")
    }
  }, [inputValue])

  return (
    <div className={css.home}>
      <div className={css.welcome}>
        <h1>Where is Cass?</h1>
        <p>
          Can you find me?
        </p>
        <p>
          Put in the correct code sequence once you're confident you've found all the clues.
        </p>
      </div>
      <div className={css["answer-inputs"]}>
        <form onSubmit={submitAnswer}>
          <label htmlFor="the-answer">What is the code sequence?</label>
          <input
            id="the-answer"
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
          />
          <button className={css['button']} type="submit">Submit code</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
