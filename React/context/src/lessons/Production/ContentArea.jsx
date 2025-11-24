

// These components use the custom useTheme() hook to access the context values cleanly.

import { useTheme } from "./ThemeContext";

// Consumer of isDark derived state
export const ContentArea = () => {
  // Use the custom hook to get the derived state (Points 4 & 6)
  const { isDark } = useTheme();

  const style = {
    padding: '40px',
    backgroundColor: isDark ? '#333' : '#fff',
    color: isDark ? '#fff' : '#333',
    border: `1px solid ${isDark ? '#ddd' : '#333'}`,
    margin: '20px',
  };

  return (
    <div style={style}>
      <h2>Content Area</h2>
      <p>This component knows it is currently **{isDark ? 'Dark' : 'Light'}** mode based on a *derived state* from the context.</p>
      <p>It automatically updates when the theme toggles.</p>
    </div>
  );
}

