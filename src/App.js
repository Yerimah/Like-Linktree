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
      <div id="twitter">iamdeewyne</div>
      <div id="slack"></div>

      <div className="links">
       <button>
        <a id="btn__zuri" href="https://training.zuri.team/">
          Zuri team
        </a>
       </button>

        <button>
          <a id="books" href="http://books.zuri.team">Designing and Coding Books</a>
        </button>

        <button>
          <a id="book__python" href="https://books.zuri.team/">Python Books</a>
        </button>

        <button>
          <a id="pitch" href="https://background.zuri.team"></a>
        </button>

        <button>
          <a id="book__design" href="https://books.zuri.team/design-rules">Design Books</a>  
        </button>
      </div>
    </div>
  );
}

export default App;
