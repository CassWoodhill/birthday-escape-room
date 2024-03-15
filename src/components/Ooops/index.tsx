import { Link } from "react-router-dom";
import css from "./Oops.module.scss";

export const Ooops: React.FC = () => {
  return (
    <div className={css.oops}>
      <h1>Not quite!</h1>
      <p>
        That wasn't the answer,
        <Link to="/">go back and try again</Link>
      </p>
    </div>
  );
};
