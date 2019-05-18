import React from "react";
import { Router } from "react-router-dom";
import { render } from "react-testing-library";
import { createMemoryHistory } from "history";

import configureStore from "./configureStore";
import { Provider } from "react-redux";

export const renderWithReduxAndRouter = (
  component,
  {
    store = configureStore(),
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{component}</Router>
      </Provider>
    ),
    store,
    history
  };
};

export const mockSubredditInfoResponse = {
  data: {
    title: "A subreddit for cute and cuddly pictures",
    public_description:
      "Things that make you go AWW! Like puppies, bunnies, babies, and so on...↵↵A place for really cute pictures and videos!",
    subscribers: 20596602,
    display_name_prefixed: "r/aww"
  }
};

export const mockBestPostsResponse = {
  data: {
    children: [
      {
        data: {
          id: "1",
          permalink:
            "/r/mildlyinteresting/comments/bpt2a4/i_came_across_a_tank_tread_in_the_woods/",
          ups: 4132,
          title: "I came across a tank tread in the woods.",
          subreddit: "mildlyinteresting",
          subreddit_name_prefixed: "r/mildlyinteresting"
        }
      },
      {
        data: {
          id: "2",
          permalink:
            "/r/AskReddit/comments/bpw8r2/if_you_could_keep_any_animal_as_a_pet_and_it/",
          ups: 31055,
          title:
            "If you could keep any animal as a pet and it would be 100% friendly and loyal, what animal would you pick?",
          subreddit: "AskReddit",
          subreddit_name_prefixed: "r/AskReddit"
        }
      },
      {
        data: {
          id: "3",
          permalink:
            "/r/aww/comments/bq2i9n/reddit_meet_meela_rescued_from_romania_now_living/",
          ups: 21084,
          title:
            "Reddit, meet Meela. Rescued from Romania, now living by the seaside in the UK.",
          subreddit: "aww",
          subreddit_name_prefixed: "r/aww"
        }
      },
      {
        data: {
          id: "4",
          permalink: "/r/gaming/comments/bq2i14/samus_cosplay_huh/",
          ups: 23026,
          title: "Samus cosplay, huh?",
          subreddit: "gaming",
          subreddit_name_prefixed: "r/gaming"
        }
      },
      {
        data: {
          id: "5",
          permalink:
            "/r/gaming/comments/bptrg3/i_started_playing_detroit_become_human_but_im_new/",
          ups: 91247,
          title:
            "I started playing Detroit: Become Human, but I'm new to PlayStation and still don't know which button is where. This was my solution.",
          subreddit: "gaming",
          subreddit_name_prefixed: "r/gaming"
        }
      }
    ]
  }
};
