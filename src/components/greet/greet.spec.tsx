import { render, screen } from "@testing-library/react";
import Greet from "./greet"

//.skip means this test is skipped
// test.skip("Greet renders correctly", () => {
//     render(<Greet></Greet>)
//     const textElement = screen.getByText(/hello/i)
//     expect(textElement).toBeInTheDocument()
// })

//.only makes only this test run
// test.only("Greet renders with a name", () => {
//     render(<Greet name="Ryan"></Greet>)
//     const textElement = screen.getByText("Hello Ryan")
//     expect(textElement).toBeInTheDocument()
// })

//Describe is used to create a group of tests
//Can use .only and .skip on describe block
describe("Greet", () => {

    test("Greet renders correctly", () => {
        render(<Greet></Greet>)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })

    //Describe blocks can be nested
    describe("nested describe block", () => {
        test("Greet renders with a name", () => {
            render(<Greet name="Ryan"></Greet>)
            const textElement = screen.getByText("Hello Ryan")
            expect(textElement).toBeInTheDocument()
        })
    })

})

//Test suite = test file