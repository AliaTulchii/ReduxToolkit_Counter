import Counter from "features/counter/Counter";
import css from './App.module.css'



export const App = () => {
  return (
    <main className={css.App}>
      <Counter />
    </main>
  );
};
