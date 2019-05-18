import React from "react";
import BestPosts from "../components/BestPosts/BestPosts";
import { AppRoutes } from "../App";
import { waitForElement, fireEvent } from "react-testing-library";

import {
  renderWithReduxAndRouter,
  mockBestPostsResponse
} from "../testsHelpers";

describe("best posts", () => {
  it("renders best reddit posts", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockBestPostsResponse));
    const { getByText, getByTestId, getAllByTestId } = renderWithReduxAndRouter(
      <BestPosts postsCount={5} />
    );
    await waitForElement(() => getByTestId("best-posts-wrapper"));

    expect(getByText("Home")).toBeInTheDocument();
    expect(getAllByTestId("post").length).toBe(
      mockBestPostsResponse.data.children.length
    );
    expect(
      getByText(mockBestPostsResponse.data.children[0].data.title)
    ).toBeInTheDocument();
  });
  it("renders an error message on failed fetch", async () => {
    fetch.mockReject(new Error());

    const { getByText, getByTestId } = renderWithReduxAndRouter(
      <BestPosts postsCount={5} />
    );
    await waitForElement(() => getByTestId("error"));

    expect(
      getByText("Ooops... Something went wrong. Please try again later.")
    ).toBeInTheDocument();
  });
  it("navigates to subreddit details on subreddit click", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockBestPostsResponse));
    const leftClick = { button: 0 };

    const { getByText, getByTestId, debug, history } = renderWithReduxAndRouter(
      <AppRoutes />
    );
    await waitForElement(() => getByTestId("best-posts-wrapper"));
    fireEvent.click(
      getByText(
        mockBestPostsResponse.data.children[0].data.subreddit_name_prefixed
      ),
      leftClick
    );

    const newUrl = `/about/${
      mockBestPostsResponse.data.children[0].data.subreddit
    }`;

    expect(history.location.pathname).toEqual(newUrl);
  });
});
