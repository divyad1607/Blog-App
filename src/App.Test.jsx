import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "./store/store";
import App from "./App";

// Mock main components
jest.mock("./components/index", () => ({
  Header: () => <div data-testid="header">Header</div>,
  Footer: () => <div data-testid="footer">Footer</div>,
  Signup: () => <div data-testid="signup">Signup Page</div>,
  Login: () => <div data-testid="login">Login Page</div>,
  AddPost: () => <div data-testid="addpost">AddPost Page</div>,
  AllPosts: () => <div data-testid="allposts">AllPosts Page</div>,
  AuthLayout: ({ children }) => <div>{children}</div>,
}));

describe("App Routing", () => {
  it("renders header and footer", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders Signup route", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/signup"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("signup")).toBeInTheDocument();
  });
});
