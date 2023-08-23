function Home() {
    return (
      <div className="home">
        <h1>Bonjour!</h1>
        <img src="s-l1600.jpg" alt="Welcome" className="welcome-picture" width={"300"} height={"285"}/>
        <h3>This is a safe place for gamers!</h3>
  
        <div>
          <p>This is a video game enthusiast platform / app.</p>
          <p>I've listed some notable games through my lifetime that I've enjoyed playing for many years.</p>
        </div>
  
        <div className="bottomBox">
          <h3>How It Works</h3>
          <div>Each game is listed with its release year, category, and other details.</div>
          <p>Use the sorting and searching options to explore the games based on your preferences.</p>
        </div>
      </div>
    );
  }
  
  export default Home;
  
  