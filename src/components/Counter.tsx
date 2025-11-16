import { forwardRef, useImperativeHandle, useState } from 'react';

const Counter = forwardRef(function Counter(_props, ref) {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increment() { setCount(c => c + 1); },
    reset() { setCount(0); },
    get() { return count; }
  }), [count]);

  return (
    <>
      <div className="counter" style={{ margin: '8px 0' }}>
        <strong>Roll Count:</strong> {count}
      </div>
    </>
  );
});

export default Counter;
