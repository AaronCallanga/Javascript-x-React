import { ContentArea } from "./Production/components/ContentArea";
import { ThemeProvider } from "./Production/ThemeContext";
import { ThemeSwitcher } from "./Production/components/ThemeSwitcher";

// Import the Provider to wrap the entire app

// The main application wrapper
export const ProductionSetup = () => {
  return (
    // Wrap the entire components with the ThemeProvider
    <ThemeProvider>
      <div style={{ minHeight: "50vh", transition: "background-color 0.3s" }}>
        <header style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
          <h1> 🎯 2. Context API Production Setup</h1>
          <ThemeSwitcher />
        </header>
        <ContentArea />
      </div>
    </ThemeProvider>
  );
};

// 1. Create ThemeContext (context/global store, provider component, custom hook)
// 2. Wrap the components with the provider component
// 3. Each component should access the context with the use of custom hook and destructure the value by themselves
