import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="home-section">
      <section className="home-content">
        <h2 className="home-content-subtitle">So you want to travel to</h2>

        <h1 className="home-content-title">SPACE</h1>

        <p className="home-content-body">
          Let’s face it. If you want to go to space, you might as well genuinely go to outer space 
          and not hover kind of on the edge of it. Well sit back, and relax because we will give you 
          a truly out-of-this-world experience!
        </p>

        <div className="home-content-explore">
          <Link to="/destination">explore</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
