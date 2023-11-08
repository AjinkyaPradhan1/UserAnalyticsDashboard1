import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get the current count from localStorage when the component mounts
    const savedCount = localStorage.getItem('visitorCount');
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    } else {
      setCount(0);
    }

    // Increment the count and save it to localStorage when the component unmounts or the page is closed
    return () => {
      localStorage.setItem('visitorCount', count + 1);
    };
  }, [count]);

  return (
    <div>
      {count}
    </div>
  );
};

export default VisitorCounter;