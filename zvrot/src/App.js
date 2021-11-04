import './App.scss';

function App() {
  return (
      <>
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">
              <span className="visually-hidden">Zvrot</span>
              <img src="/assets/logo.png" alt="zvrot logo" className="img-fluid App-logo"></img>
            </h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Contact</a>
            </nav>
          </div>
        </header>

        <main className="px-3">
          <h1>Cover your page.</h1>
          <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
          </p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
        </footer>
      </>
  );
}

export default App;
