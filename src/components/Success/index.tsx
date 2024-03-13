import css from "./Success.module.scss";

export const Success: React.FC = () => {
  return (
    <div className={css.success}>
      <h1>Congratulations!</h1>
      <p>
        Find me at the nearest church. See you there
      </p>
    </div>
  );
};
