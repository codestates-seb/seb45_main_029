// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { LatestInfoContainer } from '../style/LatestInfo';

const LatestInfo = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([{}]);

  const handleLike = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  const sortByDateDescending = () => {
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setData(sortedData);
  };
  return (
    <>
      <LatestInfoContainer>
        <div>
          <button onClick={sortByDateDescending}>최신순</button>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.name} - {item.date}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button onClick={() => handleLike()}>좋아요순</button>
          <ul>
            {items
              .sort((a, b) => b.likes - a.likes) // 좋아요 순으로 정렬
              .map((item) => (
                <li key={item.id}>
                  {item.name} {item.likes}{' '}
                </li>
              ))}
          </ul>
        </div>
      </LatestInfoContainer>
    </>
  );
};
export default LatestInfo;
