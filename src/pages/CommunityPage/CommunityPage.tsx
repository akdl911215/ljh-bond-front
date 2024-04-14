//src>pages>CommunityPage>CommunityPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CommunityPage.css';
import { useInfiniteQuery } from 'react-query';
import { Post } from '../../components/types';

async function fetchPosts({ pageParam = 0 }) {
  // 여기에 API 호출 로직 구현
  // 예: return fetch(`https://example.com/api/posts?cursor=${pageParam}`).then(res => res.json());
  // 임시 데이터 반환
  return {
     posts: [
      { id: 1, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150, content: "Lorem ipsum...",category: "Technology" },
      { id: 2, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100, content: "Lorem ipsum...", category: "Life"  },
      { id: 3, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150, content: "Lorem ipsum...", category: "Technology" },
      { id: 4, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100, content: "Lorem ipsum...", category: "Life" },
      { id: 5, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150, content: "Lorem ipsum...", category: "Technology"  },
      { id: 6, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100, content: "Lorem ipsum...", category: "Life"  },
      { id: 7, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150, content: "Lorem ipsum...", category: "Music"  },
      { id: 8, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100, content: "Lorem ipsum...", category: "Life"  },
      { id: 9, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150, content: "Lorem ipsum...", category: "Life"  },
      { id: 10, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100, content: "Lorem ipsum...", category: "Music"  },
      { id: 11, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150, content: "Lorem ipsum...", category: "Life"  },
      { id: 12, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100, content: "Lorem ipsum...", category: "Music"  },      // 추가 게시물...
    ],
    nextCursor: pageParam + 1, // 다음 커서 값. 실제 데이터에 따라 조정 필요
  };
}

const categories = ['All', 'Technology', 'Life', 'Music','Sports','Water','eco'];

const CommunityPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All'); // 선택된 카테고리 상태 관리
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(['posts', selectedCategory], fetchPosts, {
    getNextPageParam: (lastPage) => lastPage.nextCursor
  });

  const handleCreatePost = () => {
    navigate('/create-post');
  };

  const handleWheel = (e: React.WheelEvent) => {
    const container = e.currentTarget;
    const containerScrollPosition = container.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behavior: 'smooth' // Corrected spelling here
    });
  };

  return (
    <div className="community-page">
      <h2>커뮤니티</h2>
      <div className="categories-container" onWheel={handleWheel}>
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'selected' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="write-post-button-container">
        <button className="write-post-button" onClick={handleCreatePost}>작성하기</button>
      </div>

      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.posts.map((post: Post) => (
            <div key={post.id} className="post-item" onClick={() => navigate(`/post/${post.id}`)}>
              <h3>{post.title}</h3>
              <p>{`${post.author} - ${post.date} - Views: ${post.views} - Category: ${post.category}`}</p>
            </div>
          ))}
        </React.Fragment>
      ))}

      <div className="load-more-button-container">
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
        </button>
      </div>
    </div>
  );
};

export default CommunityPage;