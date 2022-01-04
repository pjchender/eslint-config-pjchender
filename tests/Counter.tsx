import { FC, useEffect, useState } from 'react';

interface Props {
  defaultValue: number;
}

const Counter: FC<Props> = ({ defaultValue }) => {
  const [count, setCount] = useState(defaultValue);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('count', count);
  }, [count]);

  return (
    <div>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
      <span>{count}</span>
    </div>
  );
};

export default Counter;
