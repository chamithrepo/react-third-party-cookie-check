import React from 'react';
import { useThirdPartyCookieCheck } from './useThirdPartyCookieCheck';
function App() {
  const status = useThirdPartyCookieCheck()
  return (
    <div className="App">
      <h2>Third-Party Cookies enabled? {status ? 'Yes' : 'No'}</h2>
    </div>
  );
}

export default App;
