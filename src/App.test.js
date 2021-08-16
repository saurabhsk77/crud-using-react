import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BaseInput from "./component/common/BaseInput";
import Navbar from "./component/page/Navbar";
import Create from "./component/users/Create";
test("render header component", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navbar title="testCrud" />
    </BrowserRouter>
  );
  expect(getByText("testCrud")).toBeInTheDocument();
});

describe("render base input component", () => {
  test("render baseinput component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <BaseInput label="testinput" />
      </BrowserRouter>
    );
    expect(getByText("testinput :")).toBeInTheDocument();
  });
});

describe("test", () => {
  test("input test", () => {
    const { container } = render(<BaseInput />);
    expect(container).not.toBe(null);
  });
});

test("button", () => {
  const { getByRole } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(getByRole("button")).toBeInTheDocument();
});

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

test("calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
