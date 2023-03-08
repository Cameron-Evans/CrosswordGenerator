import {render, screen } from '@testing-library/react';
import About from '../Pages/About';
import { BrowserRouter } from 'react-router-dom';

describe('About', () => {
    test("Render correctly", () =>{
        render(
            <BrowserRouter>
                <About/>
            </BrowserRouter>
        )

        const makeButton = screen.getByTitle("MakeButton");

        expect(makeButton).toBeInTheDocument();
    })
});