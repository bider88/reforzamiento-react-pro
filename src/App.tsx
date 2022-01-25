import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './bases/CounterReducerComponent';

function App() {
  return (
    <>
      <Counter initialValue={10}/>
      <hr />
      <CounterBy />
      <hr />
      <CounterEffect />
      <hr />
      <CounterHook />
      <hr />
      <CounterReducerComponent />
    </>
  );
}

export default App;
