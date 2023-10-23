import { render, screen } from "@testing-library/react";
import Application from "./application";


//Checking for elements by Role
describe("Application", () => {
    test('renders correctly', () => {
        render(<Application></Application>)

        const nameElement = screen.getByRole('textbox')
        expect(nameElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })
})