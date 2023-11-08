import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get the current count from localStorage when the component mounts
    const savedCount = localStorage.getItem('visitorCount');
    const initialCount = Number(savedCount) || 0;
    setCount(initialCount+1);
    
  }, []);

  return (
    <div>
      {count}
    </div>
  );
};

export default VisitorCounter;