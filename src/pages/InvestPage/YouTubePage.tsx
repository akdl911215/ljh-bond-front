import React from 'react';
import './YouTubePage.css'; // Assume you've created a CSS file for styling

// Sample data structure for YouTube videos
interface YouTubeVideo {
  id: string;
  title: string;
  url: string;
}

// Sample list of YouTube videos
const videos: YouTubeVideo[] = [
  {
    id: 'video1',
    title: 'Introduction to Investing',
    url: 'https://www.youtube.com/watch?v=example1',
  },
  {
    id: 'video2',
    title: 'Understanding the Stock Market',
    url: 'https://www.youtube.com/watch?v=example2',
  },
  // Add more videos as needed
];

const YouTubePage: React.FC = () => {
  return (
    <div className="youtube-page">
      <h1>YouTube Videos</h1>
      <ul className="video-list">
        {videos.map((video) => (
          <li key={video.id}>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              {video.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubePage;