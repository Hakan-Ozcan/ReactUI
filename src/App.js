import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.png";
import Bootstrap from "./images/bootstrap.png";
import KompleWeb from "./images/kompleweb.jpg";
import YazilimciOlma from "./images/yazilimciolma.png";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Quis mollit cillum ex magna sit quis voluptate enim laborum. Ut qui ipsum aute minim. Exercitation officia ad reprehenderit esse ipsum cillum occaecat do."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Quis mollit cillum ex magna sit quis voluptate enim laborum. Ut qui ipsum aute minim. Exercitation officia ad reprehenderit esse ipsum cillum occaecat do."
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Komple Web"
                description="Quis mollit cillum ex magna sit quis voluptate enim laborum. Ut qui ipsum aute minim. Exercitation officia ad reprehenderit esse ipsum cillum occaecat do."
              />
            </div>
            <div className="column">
              <Course
                image={YazilimciOlma}
                title="Frontend"
                description="Quis mollit cillum ex magna sit quis voluptate enim laborum. Ut qui ipsum aute minim. Exercitation officia ad reprehenderit esse ipsum cillum occaecat do."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
