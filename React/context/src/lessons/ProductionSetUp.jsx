import { ContentArea } from "./Production/ContentArea";
import { ThemeProvider } from "./Production/ThemeContext";
import { ThemeSwitcher } from "./Production/ThemeSwitcher";

// Import the Provider to wrap the entire app

// The main application wrapper
export const ProductionSetup = () => {
  return (
    // Wrap the entire app with the ThemeProvider
    <ThemeProvider>
      <div style={{ minHeight: '100vh', transition: 'background-color 0.3s' }}>
        <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <h1>Context API Production Setup</h1>
          <ThemeSwitcher />
        </header>
        <ContentArea />
      </div>
    </ThemeProvider>
  );
}
