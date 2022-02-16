import {maybe, randomElement, randomBetween, randomTimestamp} from '~helpers/tools';
import faker from 'faker';

import images from '~data/images/images';

const getRandomImage = () => {
  const r = randomBetween(1, 100);
  const sources = [
    'https://source.unsplash.com/random/?r=' + r,
    'http://placeimg.com/1000/1000/any?r=' + r,
    // 'http://lorempixel.com/1000/1000/?r=' + r,
  ];

  return randomElement(sources);
};

const getRandomLocalImage = () => {
  return randomElement(images);
};

const getRandomLocation = () => {
  const locationGenerator = randomElement([
    faker.address.city,
    faker.address.country,
    () => faker.address.city() + ', ' + faker.address.country(),
    faker.address.state,
    faker.address.streetName,
    () => faker.address.streetName() + ', ' + faker.address.city(),
    faker.address.streetAddress,
  ]);
  return locationGenerator();
};

const getPosts = () =>
  [...Array(20)].map((v, i) => ({
    id: faker.random.uuid(), // `post_id_${i}`,
    user: {
      id: faker.random.uuid(), // `user_id_${i}`,
      username: faker.internet.userName(),
      profile_pic_url: maybe(0.1) ? '' : faker.image.avatar(),
      status: {
        has_story: maybe(),
        story_count: randomBetween(1, 10),
        story_seen: maybe(),
      },
    },
    info: {
      caption: maybe(0.3) ? '' : maybe() ? faker.lorem.text() : faker.lorem.lines(1),
      location: maybe(0.3) ? '' : getRandomLocation(),
      timestamp: randomTimestamp(),
    },
    media: {
      type: maybe(0.8) ? 'picture' : 'video',
      url: getRandomLocalImage(),
      aspect_ratio: maybe() ? 1.0 : randomBetween(8, 19) / 10, // min=0.8 (h=1.25w) max=1.9 (h=0.52w)
    },
    status: {
      likes_count: maybe() ? 0 : randomBetween(0, 250),
      comments_count: maybe() ? 0 : randomBetween(0, 50),
      is_liked: maybe(0.4),
      is_saved: maybe(0.2),
    },
  }));

const getStoryCircles = () =>
  [...Array(20)].map((v, i) => ({
    id: faker.random.uuid(), // `user_id_${i}`,
    username: faker.internet.userName(),
    profile_pic_url: maybe(0.1) ? '' : faker.image.avatar(),
    status: {
      has_story: true,
      story_count: randomBetween(1, 10),
      story_seen: maybe(0.1),
    },
  }));

const getSelfStoryCircle = () => ({
  id: faker.random.uuid(),
  username: faker.internet.userName(),
  profile_pic_url: maybe(0.1) ? '' : faker.image.avatar(),
  status: {
    has_story: maybe(),
    story_count: randomBetween(1, 10),
    story_seen: maybe(),
  },
});

export {getPosts, getStoryCircles, getSelfStoryCircle};
