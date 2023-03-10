import {fireEvent, render, screen } from '@testing-library/react';
import Details from '../Details/Details';
import { BrowserRouter } from 'react-router-dom';

describe('Details', () => {
    test("Render correctly", () =>{
        render(
            <BrowserRouter>
                <Details/>
            </BrowserRouter>
        )

        expect(screen.getByText('Word Search Database')).toBeInTheDocument();
    })
});