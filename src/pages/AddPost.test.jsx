import { render, screen } from "@testing-library/react";
import AddPost from "./AddPost";

// Mock child components
jest.mock("./PostForm", () => () => <div data-testid="post-form" />);
jest.mock("./Container", () => ({ children }) => <div>{children}</div>);

describe("AddPost Component", () => {
  it("renders the title", () => {
    render(<AddPost />);
    expect(screen.getByText(/create a new post/i)).toBeInTheDocument();
  });

  it("renders the PostForm", () => {
    render(<AddPost />);
    expect(screen.getByTestId("post-form")).toBeInTheDocument();
  });
});
