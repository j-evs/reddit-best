import React from "react";
import { AppRoutes } from "../App";
import { waitForElement } from "react-testing-library";

import {
  renderWithReduxAndRouter,
  mockSubredditInfoResponse
} from "../testsHelpers";

describe("subreddit info", () => {
  it("renders subreddit info", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockSubredditInfoResponse));

    const { getByText, getByTestId } = renderWithReduxAndRouter(<AppRoutes />, {
      route: "/about/aww"
    });

    await waitForElement(() => getByTestId("subreddit-info"));

    expect(
      getByText(mockSubredditInfoResponse.data.display_name_prefixed)
    ).toBeInTheDocument();
    expect(
      getByText(mockSubredditInfoResponse.data.public_description)
    ).toBeInTheDocument();
    expect(getByText(mockSubredditInfoResponse.data.title)).toBeInTheDocument();
  });
});
