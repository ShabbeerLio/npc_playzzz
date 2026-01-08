const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

// fetch videos from uploads playlist
export async function fetchVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=12&order=date&type=video&key=${API_KEY}`;

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

//   console.log("YT RAW RESPONSE:", data);
  return data.items || [];
}
