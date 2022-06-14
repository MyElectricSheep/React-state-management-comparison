import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set } from './actions';

export const SetCounter = () => {
  const count = useSelector((state) => state.count);
  const [input, setInput] = useState(count);
  const dispatch = useDispatch();

  useEffect(() => {
    setInput(count);
  }, [count]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(input));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
