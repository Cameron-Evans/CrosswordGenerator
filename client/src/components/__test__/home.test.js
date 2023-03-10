import {fireEvent, render, screen } from '@testing-library/react';
import Home from '../Pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home', () => {
    test("Render correctly", () =>{
        render(
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )

        const keywordField = screen.getByPlaceholderText(/Enter a keyword/i);
        const createButton = screen.getByRole("button");

        expect(keywordField).toBeInTheDocument();
        expect(keywordField).toHaveAttribute("type", "text");

        expect(createButton).toBeInTheDocument();
        expect(createButton).toHaveAttribute("type", "submit");
    })

    test("Keyword input changes with on changed event", () =>{
        render(
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )

        const keywordField = screen.getByPlaceholderText(/Enter a keyword/i);

        const keywordTest = "dogs";

        fireEvent.change(keywordField, {target: {value:keywordTest}})
    })
});