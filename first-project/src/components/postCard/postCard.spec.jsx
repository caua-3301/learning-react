import { screen, render } from "@testing-library/react";
import { props } from "./propsPostCard";
import { PostCard } from ".";

describe("<PostCard />", () => {
  it("should show itens", () => {
    render(<PostCard {...props} />);

    //debug();

    expect(screen.getByRole('img')).toBeInTheDocument();
  })

  it("should make a snapshot", () => {
    render(<PostCard {...props} />);

    //debug();

    expect(document.body).toMatchSnapshot();
  })
});
