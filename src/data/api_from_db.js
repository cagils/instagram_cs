import {
  user as db_user,
  post as db_post,
  comment as db_comment,
  post_like as db_post_like,
  post_save as db_post_save,
  comment_like as db_comment_like,
  story as db_story,
  story_overlay as db_story_overlay,
  story_seen as db_story_seen,
} from '~data/database_relational_data';

const selfId = 'USER_001';

const _pick = (keys, obj) =>
  keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});

const _isStorySeen = (userId) =>
  db_story
    .filter((x) => x.user_id === userId)
    .every((y) => db_story_seen.some((z) => z.story_id === y.id && z.user_id === selfId));

const getPosts = () =>
  db_post
    .map((p, i) => ({
      id: p.id,
      user: {
        ...db_user.find((x) => x.id === p.user_id),
        status: {
          has_story: db_story.some((x) => x.user_id === p.user_id),
          story_count: db_story.filter((x) => x.user_id === p.user_id).length,
          story_seen: _isStorySeen(p.user_id),
        },
      },
      info: {
        caption: p.caption,
        location: p.location,
        timestamp: p.posted_at,
      },
      media: {
        type: p.type,
        url: p.media_url,
        aspect_ratio: p.media_aspect_ratio,
      },
      status: {
        likes_count: db_post_like.filter((x) => x.post_id === p.id).length,
        comments_count: db_comment.filter((x) => x.post_id === p.id).length,
        is_liked: db_post_like.some((x) => x.post_id === p.id && x.user_id === selfId),
        is_saved: db_post_save.some((x) => x.post_id === p.id && x.user_id === selfId),
      },
    }))
    .sort((a, b) => -a.info.timestamp.localeCompare(b.info.timestamp));

const getStoryCircles = () => {
  const db_story_reduced = db_story.reduce((acc, story) => {
    const userId = story.user_id;
    const userName = db_user.find((x) => x.id === userId).username;
    if (!acc[userId]) {
      acc[userId] = {user_id: userId, count: 0, stories: []};
    }
    acc[userId].count++;
    acc[userId].stories.push(story);
    return acc;
  }, {});

  return Object.values(db_story_reduced).map((s, i) => ({
    username: db_user.find((x) => x.id === s.user_id).username,
    profile_pic_url: db_user.find((x) => x.id === s.user_id).profile_pic_url,
    status: {
      has_story: true,
      story_count: s.count,
      story_seen: _isStorySeen(s.user_id),
    },
  }));
};

const getSelfStoryCircle = () => ({
  username: db_user.find((x) => x.id === selfId).username,
  profile_pic_url: db_user.find((x) => x.id === selfId).profile_pic_url,
  status: {
    has_story: db_story.some((x) => x.user_id === selfId),
    story_count: db_story.filter((x) => x.user_id === selfId).length,
    story_seen: _isStorySeen(selfId),
  },
});

export {getPosts, getStoryCircles, getSelfStoryCircle};
