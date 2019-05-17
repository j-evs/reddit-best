const initialState = {
  bestPosts: [
    {
      id: "1",
      permalink:
        "/r/mildlyinteresting/comments/bpt2a4/i_came_across_a_tank_tread_in_the_woods/",
      ups: 4132,
      title: "I came across a tank tread in the woods.",
      subreddit: "mildlyinteresting"
    },
    {
      id: "2",
      permalink:
        "/r/mildlyinteresting/comments/bpt2a4/i_came_across_a_tank_tread_in_the_woods/",
      ups: 4132,
      title: "I came across a tank tread in the woods.",
      subreddit: "mildlyinteresting"
    },
    {
      id: "3",
      permalink:
        "/r/mildlyinteresting/comments/bpt2a4/i_came_across_a_tank_tread_in_the_woods/",
      ups: 4132,
      title: "I came across a tank tread in the woods.",
      subreddit: "mildlyinteresting"
    },
    {
      id: "4",
      permalink:
        "/r/mildlyinteresting/comments/bpt2a4/i_came_across_a_tank_tread_in_the_woods/",
      ups: 4132,
      title: "I came across a tank tread in the woods.",
      subreddit: "mildlyinteresting"
    },
    {
      id: "5",
      permalink:
        "/r/mildlyinteresting/comments/bpt2a4/i_came_across_a_tank_tread_in_the_woods/",
      ups: 4132,
      title: "I came across a tank tread in the woods.",
      subreddit: "mildlyinteresting"
    }
  ],
  subredditInfo: {
    askReddit: {
      title: "For photos that are, you know, mildly interesting",
      public_description:
        "Aww, cripes. I didn't know I'd have to write a description. How many words is that so far, like a hundred? Soooo, yeah. Mildly interesting stuff. Stuff that interests you. Mildly. It's in the name, ffs.",
      subscribers: 15909385
    }
  }
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
