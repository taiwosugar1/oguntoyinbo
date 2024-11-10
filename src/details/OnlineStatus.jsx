import React, { useState, useEffect } from 'react';

const OnlineStatus = () => {
  // Track the online status of the app
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Event listeners to update the online status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up event listeners when component unmounts
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={{
      padding: '10px', 
      textAlign: 'center',
      color: isOnline ? 'green' : 'red',
      fontWeight: 'bold'
    }}>
      {isOnline ? 'You are online' : 'You are offline'}
    </div>
  );
};

export default OnlineStatus;
