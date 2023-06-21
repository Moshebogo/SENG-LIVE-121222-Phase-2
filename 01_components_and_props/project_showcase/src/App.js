import List from "./List.js";
import projects from "./projects.js"

function App() {
  const myVar = "Lamborghini"
  return (
           <>
            <div>Project Showcase {myVar}</div>
            <h1>Hell0 from React!</h1>  
            <List  title="firstList" subtitle="something" />     
            <List  title="secondList" />     
           </>
         )
}
     
export default App;