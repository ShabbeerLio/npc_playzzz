import Box from "../components/Box";
import logo from "../Assets/NPC_PlayZzz_logo-removebg-preview.png";
import { fetchVideos } from "@/lib/youtube";
import Image from "next/image";
import Link from "next/link";
import about from "../Assets/image2.jpg";

interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
      medium: {
        url: string;
      };
      default: {
        url: string;
      };
    };
  };
}

export default async function Home() {
  const videos: YouTubeVideo[] = await fetchVideos();
  console.log(videos, "videos");
  return (
    <main className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Image alt="Logo" src={logo} fill sizes="100%" />
        </div>

        <Link
          href="https://youtube.com/@npcplayzzz?si=ObUpu2dV2tcuQzgk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn neon">Subscribe</button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-right">
          <span>Welcome</span>
          <h1>
            NPC_Play<span>Zz</span>
            <span>z</span>
          </h1>
          <p>Let the Game Begin</p>
          <p> Epic gameplay • Moments • Live streams</p>
          <Link
            href="https://youtube.com/@npcplayzzz?si=ObUpu2dV2tcuQzgk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn big">Join the Channel</button>
          </Link>
          <div className="hero-background">
            <Box />
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="videos">
        <h2>Latest Videos</h2>

        <div className="cards">
          {videos.map((video: YouTubeVideo) => {
            const vid = video.id.videoId;
            const { title, thumbnails } = video.snippet;

            return (
              <a
                key={vid}
                href={`https://www.youtube.com/watch?v=${vid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
              >
                <img src={thumbnails.high.url} alt={title} />
                <p className="video-title">{title}</p>
                <span>NEW</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="about-left">
          <Image alt="Logo" src={about} fill sizes="100%" />
        </div>
        <div className="about-right">
          <span>About</span>
          <h2>NPC_PlayZzz</h2>
          <p>
            NPC_PlayZzz is a fun-packed gaming channel where intense gameplay
            meets hilarious moments. From clutch BGMI fights to unexpected fails
            and epic squad chaos, this channel is all about entertainment and
            good vibes.
          </p>
          <p>
            Every video is crafted to make you laugh, stay hooked, and enjoy the
            game from a fresh perspective. Whether it’s funny commentary, insane
            plays, or relatable gaming struggles, NPC_PlayZzz brings the raw fun
            of gaming straight to your screen. Join the community, support the
            grind, and be part of a growing family that loves games, humor, and
            nonstop action. 🎮🔥
          </p>
        </div>
      </section>
      <section className="attractive">
        <h1>Gaming</h1>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 NPC_PlayZzz. All rights reserved.
      </footer>
    </main>
  );
}
