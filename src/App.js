import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Avatar id="profile_img" image="profilepic.png" size="xlarge">
        <Badge value="4" severity="danger" />
      </Avatar>
    </div>
  );
}

export default App;
