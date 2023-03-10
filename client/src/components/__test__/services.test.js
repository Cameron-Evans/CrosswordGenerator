import {fireEvent, render, screen } from '@testing-library/react';
import Services from '../Services/Services';
import { BrowserRouter } from 'react-router-dom';

describe('Services', () => {
    test("Render correctly", () =>{
        render(
            <BrowserRouter>
                <Services/>
            </BrowserRouter>
        )

        expect(screen.getByText('About The Process')).toBeInTheDocument();
    })
});