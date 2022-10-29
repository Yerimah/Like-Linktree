import React from "react";

const Links = () => {
  return (
    <div>
      <section className="links">
       <button>
        <a id="twitter" href="https://twitter.com/iamdeewyne">
          Twitter link
        </a>
       </button>
       
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
          <a id="pitch" href="https://background.zuri.team">
            Background chek for Coders
          </a>
        </button>

        <button>
          <a id="book__design" href="https://books.zuri.team/design-rules">Design Books</a>  
        </button>
      </section>
    </div>
  )
}

export default Links