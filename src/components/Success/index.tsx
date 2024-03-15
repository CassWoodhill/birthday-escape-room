import css from "./Success.module.scss";

export const Success: React.FC = () => {
  return (
    <div className={css.success}>
      <h1>Stop him!</h1>
      <p>
        He's at Roker Methodist church. Hurry and stop him!
      </p>
    </div>
  );
};
