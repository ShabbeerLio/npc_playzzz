import LaserFlow from "../components/LaserFlow";
import Box from "../components/Box";
import logo from "../Assets/NPC_PlayZzz_logo-removebg-preview.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Image alt="Logo" src={logo} fill sizes="100%" />
        </div>

        <button className="btn neon">Subscribe</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-right">
          <h1>
            NPC_Play<span>Zz</span>
            <span>z</span>
          </h1>
          <p>Welcome to NPC_playZzz</p>
          <p> Epic gameplay • Moments • Live streams</p>
          <button className="btn big">Join the Channel</button>
          <div className="hero-background">
            <Box />
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="videos">
        <h2>Latest Videos</h2>
        <div className="cards">
          <div className="card">EPIC GAMEPLAY</div>
          <div className="card">NPC MOMENTS</div>
          <div className="card">TOP 5 PLAYS</div>
          <div className="card">TOP 5 PLAYS</div>
          <div className="card">TOP 5 PLAYS</div>
          <div className="card">TOP 5 PLAYS</div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>About NPC_PlayZzz</h2>
        <p>
          A gaming channel focused on intense gameplay, funny moments, and
          community-driven streams.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 NPC_PlayZzz. All rights reserved.
      </footer>
    </main>
  );
}
