import { useState } from "react";
import "./App.css";
import Loading from "./Loading";
import Loaded from "./Loaded";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [objectExample, setObjectExample] = useState({
    name: "name of object",
  });
  const [username, setUsername] = useState("damian");
const numbers = [4, 5 , 7, 10]
  // const ternary = isLoaded ? "Yes" : "No";
  return (
    <div className="App">
      <h1>Username is:{username !== "" ? username : "Guest"}</h1>
      <h1>Username is:{username || "Guest"}</h1>
      <h1>
        {isLoaded && numbers.length > 0 && (
          <>
            {numbers.map((num) => {
              return num + " & ";
            })}
            <Loaded />
          </>
        )}
      </h1>
      <button
        onClick={() => {
          setIsLoaded(!isLoaded);
        }}
      >
        Change loaded
      </button>
      <h1>{objectExample.name}</h1>
      <h1>{isLoaded ? "Yes" : "No"}</h1>
      {isLoaded ? <Loaded /> : <Loading />}
      <h1>isLoaded = {String(isLoaded)}</h1>
      {/* Because we set isLoaded to !isLoaded with button click, when the logo is loaded it is displaying the opposite, "no", loaded= false, etc and vice versa */}
    </div>
  );
}

export default App;
