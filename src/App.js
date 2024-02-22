import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, poster, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <div
        style={{
          width: '400px',
          height: '400px',
          border: '1px solid gray',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          src={poster}
          alt={name}
        />
      </div>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'https://i.namu.wiki/i/0NuYsXKpwv0MH2xAfbVxdS15FZ5ELMCNFd1Wz90Xq9bs4gFsiXX-dNAt1Va6gFp2U08F-k10ecvvAJIj-wxTQU9rceIL4el8f-SDBDUBJC-JQrxL_dGb631OFbKFrppdvkNqnYR1L5OWVlNTqk9kXA.webp',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://i.namu.wiki/i/qS3PC0zPQciEnVombG_un4WK7pxh7uU-_3HrV4chst--HRAh8AgwJqkP8CShrxLbuI2X_x42Y2nA9dAiaRUWXKRqXrDk5rBW06Oh47OOtdkIZLMRr1zCV0g4d8jtvurezPPeOw0WHyYLfXtKs0LY6Q.webp',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'https://i.namu.wiki/i/Ocn7YgYiOVdHNoa_iDs3qn8Zj7csHZp7z8oIP7c0L53ANJFTYLnYvkM7cyjv14m3XwiBrspXDgrLljyBQ4IL7ftqwxduBBegw6wGL0MjQS2mmdXU4L5yqJyPJpJtKOidHqesWNtimGtWTpylLz47sw.jpg',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Doncasu',
    image:
      'https://i.namu.wiki/i/WBVWf5EuFIXYNaf5Yl0Vqd0ogNqLYc0qX5gn8Zj3nfvFLB9u0mJ-ZGmvuN_UAB5BX4EHGp5156UiiUXBhyDezl70WH83U26E2MdhlAnIIO1ZemCDVqzf2XRNbAJECE59BSeolzJbntuogtI5aR3XSg.webp',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Kimbap',
    image:
      'https://i.namu.wiki/i/896AvIv9B8OQfUey2Zp6pzSzAVRIGW1JMFYBW77hZVzYMyVRendu9pyuofXsqPBgpLvBMtD7hXxEMwTOvhaxPf0AeCjvMCUz9rzk8_swGyP3Ld6CLr8Q3Oej8_YrQN5BBn-vk9BwCjjV3MqeT-39Zw.webp',
    rating: 4.6,
  },
];

function App() {
  return (
    <>
      {foodILike.map((dish) => {
        return <Food key={dish.id} name={dish.name} poster={dish.image} rating={dish.rating} />;
      })}
    </>
  );
}

export default App;
