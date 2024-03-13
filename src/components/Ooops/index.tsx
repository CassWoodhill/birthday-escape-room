import { Link } from "react-router-dom";
import css from "./Oops.module.scss";

export const Ooops: React.FC = () => {
  return (
    <div className={css.oops}>
      <h1>Not quite!</h1>
      <p>
        That wasn't the answer, try again
      </p>
      <Link to="/">Go back and try again</Link>
    </div>
  );
};
