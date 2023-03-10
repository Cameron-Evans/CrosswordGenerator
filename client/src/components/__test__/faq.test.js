import {fireEvent, render, screen } from '@testing-library/react';
import Faq from '../Pages/Faq';
import { BrowserRouter } from 'react-router-dom';

describe('Faq', () => {
    test("Render correctly", () =>{
        render(
            <BrowserRouter>
                <Faq/>
            </BrowserRouter>
        )

        expect(screen.getByText('FAQ #1')).toBeInTheDocument();
    })
});