// import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
// import "primereact/resources/primereact.min.css";                  //core css
// import "primeicons/primeicons.css";
// import { Avatar } from 'primereact/avatar';
// import { Badge } from 'primereact/badge';
import Profile from "./components/Profile";
import Links from "./components/Links";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Profile />
      <Links />
      <Footer /> 
    </div>
  );
}

export default App;
