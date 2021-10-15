import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new App()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidUpdate", () => {
    let inst

    beforeEach(() => {
        inst = new App()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidUpdate({ location: { pathname: "www.scielo.za" } }, "Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.componentDidUpdate({ location: { pathname: "www.scielo.za" } }, "Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.componentDidUpdate({ location: { pathname: "www.google.com" } }, "Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.componentDidUpdate({ location: { pathname: "hostname" } }, "Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.componentDidUpdate({ location: { pathname: "testhost1" } }, "Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.componentDidUpdate(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
