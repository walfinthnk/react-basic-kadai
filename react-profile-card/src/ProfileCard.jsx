import React from 'react';

export function ProfileCard({ name, age, bio, setIndex, total }) {

  function handleClick() {
    setIndex(prev => (prev + 1) % total);
  }

  return (
  <div style={{
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px'
    }}>
        <h2>{name}</h2>
        <ul>
          <li><p href="#">【年齢】{age} 歳 </p></li>
          <li><p href="#">【自己紹介】{bio}</p></li>
          <li><button onClick={handleClick}>次のプロフィール</button></li>
        </ul>
  </div>
  );
}