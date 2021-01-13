import { render, screen } from "@testing-library/react";
import App from "./App";

// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Counter Testing", () => {
  test("render the title of counter", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toContain("This is counter app")

    // const linkElement = screen.getByText('This is counter app');
    // expect(linkElement).toBeInTheDocument();
  });
});
