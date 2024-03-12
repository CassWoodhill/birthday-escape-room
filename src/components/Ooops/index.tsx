import { Link } from "react-router-dom";
import css from "./Success.module.scss";

export const Ooops: React.FC = () => {
  return (
    <div className={css.success}>
      <h1>Not quite!</h1>
      <p>
        That wasn't the answer, try again
      </p>
      <Link to="/">Go back to code input</Link>
    </div>
  );
};
