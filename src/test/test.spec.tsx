import { fireEvent, render, screen } from "@testing-library/react";

function sum(x: number, y: number) {
  return x + y;
}

//TODO[x]: test function results
it("sums numbers", () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});

// TODO[x]: spy on methods
const service = {
  sum(x: number, y: number) {
    return x + y;
  },
};
function newSum(x: number, y: number) {
    return service.sum(x, y)
}
it("shoud spy on", () => {
  const fncSpied = jest.spyOn(service, 'sum').mockResolvedValue(5)
  newSum(1, 2)
  expect(fncSpied).toBeCalled()
});

// TODO[x]: test rendering
function App() {
  return <h1>Hello World</h1>;
}
it("should render", () => {
  render(<App></App>);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

// TODO[x]: it should test that handler func was called
type SomeInputProps = { inputHandler: () => void };
function SomeInput(props: SomeInputProps) {
  return <input onChange={props.inputHandler}></input>;
}
it("should have provide input", async () => {
  const handler = jest.fn();
  render(<SomeInput inputHandler={handler}></SomeInput>);
  const inputEl = screen.getByText(
    (_, element) => element?.tagName.toLowerCase() === "input"
  );
  fireEvent.change(inputEl, { target: { value: "23" } });
  expect(handler).toHaveBeenCalled();
});

//TODO[x]: it should check click handler
type SomeButtonProps = { clickHandler: () => void };
function SomeButton(props: SomeButtonProps) {
    return <button onClick={props.clickHandler}>Button</button>;
}
it('should test button handler', () => {
    const handler = jest.fn()
    render(<SomeButton clickHandler={handler}></SomeButton>);
    const btn = screen.getByText('Button')
    fireEvent.click(btn)
    expect(handler).toHaveBeenCalled()
})