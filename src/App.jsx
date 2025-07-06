import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import ExternalActivities from "./components/ExternalActivities";

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <section id="profile">
          <Profile />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="external">
          <ExternalActivities />
        </section>
      </main>
    </>
  );
}

export default App;
