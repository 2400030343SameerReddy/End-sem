import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      height: "100vh",
      background: theme === "light" ? "#ffffff" : "#222222",
      color: theme === "light" ? "#000000" : "#ffffff",
      textAlign: "center",
      paddingTop: "50px"
    }}>
      <h1>KL College Portal</h1>
      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
