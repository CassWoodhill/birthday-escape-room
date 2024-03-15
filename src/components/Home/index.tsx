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
        <h1>Save the cake!</h1>
        <p>
          Oh no! Buddy the dinosaur is loose and hungry. Save the birthday cake from his clutches
        </p>
      </div>
      <p>
        Put in the correct 5 digit code once you've found them all.
      </p>
      <div className={css["answer-inputs"]}>
        <form onSubmit={submitAnswer}>
          <label htmlFor="the-answer">Code sequence?</label>
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
