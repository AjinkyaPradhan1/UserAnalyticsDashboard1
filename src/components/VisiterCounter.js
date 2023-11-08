import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get the current count from localStorage when the component mounts
    const savedCount = localStorage.getItem('visitorCount');
    const initialCount = Number(savedCount) || 0;
    setCount(initialCount+1);
    
    // Increment the count and save it to localStorage when the component unmounts or the page is closed
    return () => {
      localStorage.setItem('visitorCount', count + 1);
    };
  }, []);

  return (
    <div>
      {setCount}
    </div>
  );
};

export default VisitorCounter;