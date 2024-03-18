import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { Posts } from ".";
import { props } from "./props";

describe("<Post/>", () => {
    it("should exibe all imgs", () => {
        //props representa o props recebido la no arquivo index.jsx "export const Posts = (posts = []) =>"
        render(<Posts {...props} />);

        const allImgs = screen.getAllByRole("img");

        //verificando atributos
        expect(allImgs[0]).toHaveAttribute("src", "foto1.png");
        //checando renderização

        allImgs.forEach(image => {
            expect(image).toBeVisible();
            expect(image).toHaveAttribute('src');
        });

        expect(allImgs).toHaveLength(3);
    });

    it("should make the snapshot", () => {
        //props representa o props recebido la no arquivo index.jsx "export const Posts = (posts = []) =>"
        render(<Posts {...props} />);

        const elementProp = document.body;

        expect(elementProp).toMatchSnapshot();
    })
});