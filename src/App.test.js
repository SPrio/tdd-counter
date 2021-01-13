// setup file
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");

    // const linkElement = screen.getByText('This is counter app');
    // expect(linkElement).toBeInTheDocument();
  });

  test("render a button with text of increment", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find('#counter-value').text()).toBe(0)
  });
});
