import React, { useState, useEffect } from 'react';

const TestComponent = ({ name }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="test-component">
      <h1>Hello, {name}!</h1>
      <p>Count: {count}</p>
      <button
        type="button"
        onClick={handleClick}
        disabled={count >= 10}
      >
        Click me ({count}/10)
      </button>
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

TestComponent.propTypes = {
  name: 'string',
};

TestComponent.defaultProps = {
  name: 'World',
};

export default TestComponent;