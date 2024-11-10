import React, { useState, useEffect } from 'react';

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOnlineMessage, setShowOnlineMessage] = useState(isOnline);
  
  useEffect(() => {
    let timer;

    const handleOnline = () => {
      setIsOnline(true);
      setShowOnlineMessage(true);

      // Clear any previous timer and set a new one to hide the message after 5 seconds
      clearTimeout(timer);
      timer = setTimeout(() => setShowOnlineMessage(false), 5000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOnlineMessage(false); // Ensure no online message shows when offline
      clearTimeout(timer); // Clear timer when offline
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check connection on component mount
    if (navigator.onLine) {
      handleOnline();
    } else {
      handleOffline();
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer); // Clear timer on unmount
    };
  }, []);

  return (
    <div style={{
      textAlign: 'center',
      fontWeight: 'bold',
      color: isOnline ? 'green' : 'red'
    }}>
      {isOnline && showOnlineMessage && 'You are online'}
      {!isOnline && 'You are offline'}
    </div>
  );
};

export default OnlineStatus;
