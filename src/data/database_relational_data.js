const profile1 = 'https://i.imgur.com/AQIUWnl.jpg'; // madchuckle
const profile2 = 'https://i.imgur.com/sHDXd3Z.jpg';
const profile3 = 'https://i.imgur.com/w4MnfEf.jpg';
const profile4 = 'https://i.imgur.com/DcvgtbJ.jpg';
const profile5 = 'https://i.imgur.com/vtQv5Cj.jpg';

const pic1 = 'https://i.imgur.com/J2FiFTw.jpg';
const pic2 = 'https://i.imgur.com/ScTqqON.jpg';
const pic3 = 'https://i.imgur.com/9p0mrLi.jpg';
const pic4 = 'https://i.imgur.com/ES3JJLx.jpg';
const pic5 = 'https://i.imgur.com/4n8fE8W.jpg';
const pic6 = 'https://i.imgur.com/S5Nayxp.jpg';
const pic7 = 'https://i.imgur.com/T9FfCT3.jpg';
const pic8 = 'https://i.imgur.com/GWq1xh3.jpg';
const pic9 = 'https://i.imgur.com/dYpsX7U.jpg';
const pic10 = 'https://i.imgur.com/VNTfoVR.jpg';
const pic11 = 'https://i.imgur.com/Bv50n9W.jpg';
const pic12 = 'https://i.imgur.com/2oVf3I6.jpg';

const story1 = 'https://i.imgur.com/uvU4CDJ.jpg';
const story2 = 'https://i.imgur.com/53qG2ct.jpg';
const story3 = 'https://i.imgur.com/lEcEyKd.jpg';
const story4 = 'https://i.imgur.com/MLUTvd7.jpg';
const story5 = 'https://i.imgur.com/RY8IYP4.jpg';
const story6 = 'https://i.imgur.com/SIZDTWr.jpg';

export const user = [
  {
    id: 'USER_001',
    username: 'user001',
    profile_pic_url: profile1,
  },
  {
    id: 'USER_002',
    username: 'user002',
    profile_pic_url: profile2,
  },
  {
    id: 'USER_003',
    username: 'user003',
    profile_pic_url: profile3,
  },
  {
    id: 'USER_004',
    username: 'user004',
    profile_pic_url: profile4,
  },
  {
    id: 'USER_005',
    username: 'user005',
    profile_pic_url: profile5,
  },
];

export const post = [
  {
    id: 'POST_u001p001',
    user_id: 'USER_001',
    caption: 'Caption u001p001',
    location: 'Location u001p001',
    posted_at: '2020-10-12T00:41:56.930Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic1,
    media_aspect_ratio: 1.0, // 0.8 <-> 1.9
  },
  {
    id: 'POST_u001p002',
    user_id: 'USER_001',
    caption: 'Caption u001p002',
    location: null,
    posted_at: '2020-10-13T10:01:10.010Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic2,
    media_aspect_ratio: 0.75,
  },
  {
    id: 'POST_u001p003',
    user_id: 'USER_001',
    caption: 'Caption u001p003',
    location: 'Location u001p003',
    posted_at: '2020-10-14T23:22:03.120Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic3,
    media_aspect_ratio: 1.5,
  },
  {
    id: 'POST_u002p001',
    user_id: 'USER_002',
    caption: 'Caption u002p001',
    location: 'Location u002p001',
    posted_at: '2020-09-29T09:10:12.009Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic4,
    media_aspect_ratio: 1.0,
  },
  {
    id: 'POST_u003p001',
    user_id: 'USER_003',
    caption: 'Caption u003p001',
    location: 'Location u003p001',
    posted_at: '2020-09-20T23:12:45.020Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic5,
    media_aspect_ratio: 1.0,
  },
  {
    id: 'POST_u003p002',
    user_id: 'USER_003',
    caption: 'Caption u003p002',
    location: 'Location u003p002',
    posted_at: '2020-09-29T01:28:02.890Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic6,
    media_aspect_ratio: 1.0,
  },
  {
    id: 'POST_u003p003',
    user_id: 'USER_003',
    caption: 'Caption u003p003',
    location: 'Location u003p003',
    posted_at: '2020-10-02T09:10:00.937Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic7,
    media_aspect_ratio: 1.0,
  },
  {
    id: 'POST_u003p004',
    user_id: 'USER_003',
    caption: 'Caption u003p004',
    location: 'Location u003p004',
    posted_at: '2020-10-12T23:24:44.037Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic8,
    media_aspect_ratio: 1.0,
  },
  {
    id: 'POST_u003p005',
    user_id: 'USER_003',
    caption: 'Caption u003p005',
    location: 'Location u003p005',
    posted_at: '2020-10-16T23:59:01.120Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic9,
    media_aspect_ratio: 0.8,
  },
  {
    id: 'POST_u004p001',
    user_id: 'USER_004',
    caption: 'Caption u004p001',
    location: 'Location u004p001',
    posted_at: '2020-10-06T01:00:08.778Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic10,
    media_aspect_ratio: 1.6,
  },
  {
    id: 'POST_u004p002',
    user_id: 'USER_004',
    caption: 'Caption u004p002',
    location: 'Location u004p002',
    posted_at: '2020-10-08T10:24:34.083Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic11,
    media_aspect_ratio: 0.8,
  },
  {
    id: 'POST_u005p001',
    user_id: 'USER_005',
    caption: 'Caption u005p001',
    location: 'Location u005p001',
    posted_at: '2020-10-15T10:20:45.005Z',
    updated_at: null,
    type: 'picture', // picture | video
    media_url: pic12,
    media_aspect_ratio: 0.8,
  },
];

export const comment = [
  {
    id: 'COMMENT_u001p001c001',
    post_id: 'POST_u001p001',
    comment_user_id: 'USER_002',
    parent_comment_id: null,
    text: 'Comment u001p001c001',
    commented_at: '2020-10-12T04:00:08.100Z',
    updated_at: null,
  },
  {
    id: 'COMMENT_u001p001c002',
    post_id: 'POST_u001p001',
    comment_user_id: 'USER_003',
    parent_comment_id: null,
    text: 'Comment u001p001c002',
    commented_at: '2020-10-12T05:43:11.456Z',
    updated_at: null,
  },
  {
    id: 'COMMENT_u001p001c003',
    post_id: 'POST_u001p001',
    comment_user_id: 'USER_004',
    parent_comment_id: null,
    text: 'Comment u001p001c003',
    commented_at: '2020-10-14T10:01:10.893Z',
    updated_at: null,
  },
  {
    id: 'COMMENT_u001p001c004',
    post_id: 'POST_u001p001',
    comment_user_id: 'USER_005',
    parent_comment_id: null,
    text: 'Comment u001p001c004',
    commented_at: '2020-10-15T00:22:04.098Z',
    updated_at: null,
  },
  {
    id: 'COMMENT_u001p001c005',
    post_id: 'POST_u001p001',
    comment_user_id: 'USER_001',
    parent_comment_id: 'COMMENT_u001p001c002',
    text: 'Comment u001p001c005',
    commented_at: '2020-10-12T05:58:00.012Z',
    updated_at: null,
  },
  {
    id: 'COMMENT_u001p001c006',
    post_id: 'POST_u001p001',
    comment_user_id: 'USER_003',
    parent_comment_id: 'COMMENT_u001p001c005',
    text: 'Comment u001p001c006',
    commented_at: '2020-10-13T23:12:55.396Z',
    updated_at: null,
  },
];

export const post_like = [
  {
    post_id: 'POST_u001p001',
    user_id: 'USER_002',
  },
  {
    post_id: 'POST_u001p001',
    user_id: 'USER_003',
  },
  {
    post_id: 'POST_u001p001',
    user_id: 'USER_004',
  },
  {
    post_id: 'POST_u003p003',
    user_id: 'USER_001',
  },
  {
    post_id: 'POST_u003p003',
    user_id: 'USER_002',
  },
  {
    post_id: 'POST_u003p003',
    user_id: 'USER_005',
  },
  {
    post_id: 'POST_u005p001',
    user_id: 'USER_003',
  },
];

export const post_save = [
  {
    post_id: 'POST_u005p001',
    user_id: 'USER_001',
  },
];

export const comment_like = [
  {
    comment_id: 'COMMENT_u001p001c002',
    user_id: 'USER_001',
  },
];

export const story = [
  {
    id: 'STORY_u002s001',
    user_id: 'USER_002',
    posted_at: '2020-10-12T10:20:44.002Z',
    type: 'picture', // picture | video
    media_url: story1,
  },
  {
    id: 'STORY_u003s001',
    user_id: 'USER_003',
    posted_at: '2020-10-13T00:22:20.319Z',
    type: 'picture', // picture | video
    media_url: story2,
  },
  {
    id: 'STORY_u004s001',
    user_id: 'USER_004',
    posted_at: '2020-10-14T00:12:21.392Z',
    type: 'picture', // picture | video
    media_url: story3,
  },
  {
    id: 'STORY_u004s002',
    user_id: 'USER_004',
    posted_at: '2020-10-14T01:00:45.008Z',
    type: 'picture', // picture | video
    media_url: story4,
  },
  {
    id: 'STORY_u005s001',
    user_id: 'USER_005',
    posted_at: '2020-10-16T22:59:04.200Z',
    type: 'picture', // picture | video
    media_url: story5,
  },
  {
    id: 'STORY_u005s002',
    user_id: 'USER_005',
    posted_at: '2020-10-16T23:00:06.569Z',
    type: 'picture', // picture | video
    media_url: story6,
  },
];

export const story_overlay = [
  {
    overlay_id: 'OVERLAY_u005s001o001',
    story_id: 'STORY_u005s001',
    overlay_text: 'Overlay_u005s001o001',
    overlay_text_color: 'white',
    overlay_text_type: 'normal',
    overlay_text_x: 0.5,
    overlay_text_y: 0.5,
  },
  {
    overlay_id: 'OVERLAY_u005s001o002',
    story_id: 'STORY_u005s001',
    overlay_text: 'Overlay_u005s001o002',
    overlay_text_color: 'blue',
    overlay_text_type: 'modern',
    overlay_text_x: 0.5,
    overlay_text_y: 0.9,
  },
];

export const story_seen = [
  {
    // story_id: '',
    // user_id: '',
  },
];
