import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("<TodoApp />", () => {
  const setup = () => {
    render(<TodoApp />);
    const { getByText, getByTestId, getByPlaceholderText } = screen;

    return {
      ...screen,
      getByText,
      getByTestId,
      getByPlaceholderText,
    };
  };

  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId } = setup();
    getByText("등록"); // TodoForm 존재 유무 확인
    getByTestId("TodoList"); // TodoList 존재 유무 확인
  });

  it("renders two defaults todos", () => {
    const { getByText } = setup();
    getByText("TDD 배우기");
    getByText("리액트 배우기");
    getByText("react-testing-library 사용하기");
  });

  it("creates new todo", () => {
    const { getByText, getByPlaceholderText } = setup();
    fireEvent.change(getByPlaceholderText("할 일을 입력하세요"), {
      target: {
        value: "새 항목 추가하기",
      },
    });
    fireEvent.click(getByText("등록"));
    getByText("새 항목 추가하기");
  });
});
