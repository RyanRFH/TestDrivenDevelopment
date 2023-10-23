import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/greet"
//Coverage from all tests
// ----------------------|---------|----------|---------|---------|-------------------
// File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
// ----------------------|---------|----------|---------|---------|-------------------
// All files             |   21.42 |        0 |      50 |   21.42 |                   
//  src                  |    8.33 |        0 |   33.33 |    8.33 |                   
//   App.tsx             |     100 |      100 |     100 |     100 |                   
//   index.tsx           |       0 |      100 |     100 |       0 | 7-19              
//   reportWebVitals.ts  |       0 |        0 |       0 |       0 | 3-10              
//  src/components/greet |     100 |      100 |     100 |     100 |                   
//   greet.tsx           |     100 |      100 |     100 |     100 | 
// ----------------------|---------|----------|---------|---------|-------------------

//Coverage only from tests in components folder
// -----------|---------|----------|---------|---------|-------------------
// File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
// -----------|---------|----------|---------|---------|-------------------
// All files  |     100 |      100 |     100 |     100 |                   
//  greet.tsx |     100 |      100 |     100 |     100 |                   
// -----------|---------|----------|---------|---------|-------------------

//Before adding file types we don't want to test
// ----------------|---------|----------|---------|---------|-------------------
// File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
// ----------------|---------|----------|---------|---------|-------------------
// All files       |     100 |      100 |     100 |     100 |                   
//  greet.tsx      |     100 |      100 |     100 |     100 |                   
//  greet.types.ts |       0 |        0 |       0 |       0 |                   
// ----------------|---------|----------|---------|---------|-------------------

//After adding file types we don't want to test
// -----------|---------|----------|---------|---------|-------------------
// File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
// -----------|---------|----------|---------|---------|-------------------
// All files  |     100 |      100 |     100 |     100 |                   
//  greet.tsx |     100 |      100 |     100 |     100 |                   
// -----------|---------|----------|---------|---------|-------------------

//Added to package.json - defines % of code that must be covered by testing
// "jest" : {
//     "coverageThreshold": {
//       "global": {
//         "branches": 80,
//         "function": 80,
//         "lines": 80,
//         "statements": -10
//       }
//     }
//   }

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

//Can use it() instead of test()
// it("Greet renders correctly", () => {
//     render(<Greet></Greet>)
//     const textElement = screen.getByText(/hello/i)
//     expect(textElement).toBeInTheDocument()
// })

//fit() is the same as using .only()
// fit("Greet renders correctly", () => {
//     render(<Greet></Greet>)
//     const textElement = screen.getByText(/hello/i)
//     expect(textElement).toBeInTheDocument()
// })

//xit is the same as using .skip()
// xit("Greet renders correctly", () => {
//     render(<Greet></Greet>)
//     const textElement = screen.getByText(/hello/i)
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