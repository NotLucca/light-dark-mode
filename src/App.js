import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkmode(){
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "container dark" : "container"}>
        <Header 
          darkMode={darkMode}
          toggleDarkmode={toggleDarkmode}
        />
        <main
          className={darkMode ? "content dark-content" : "content"}
        >
          <h2>Main Content</h2>
          <ul style={darkMode ? {color: "black"} : {}}>
            <li>
              <a href="https://reactjs.org/">React</a> - A JavaScript library for building user interfaces.
            </li>
            <li>
              <a href="https://reactjs.org/docs/hello-world.html">Hello World</a> - A simple React app.
            </li>
            <li>

              <a href="https://reactjs.org/docs/components-and-props.html">Components and Props</a> - Components are reusable pieces of code that encapsulate what a user sees.
            </li>
          </ul>
        </main>

        

    </div>
  );
}

export default App;
