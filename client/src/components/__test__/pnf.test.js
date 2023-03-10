import {fireEvent, render, screen } from '@testing-library/react';
import PageNotFound from '../Pages/PageNotFound';
import { BrowserRouter } from 'react-router-dom';

describe('PageNotFound', () => {
    test("Render correctly", () =>{
        render(
            <BrowserRouter>
                <PageNotFound/>
            </BrowserRouter>
        )

        expect(screen.getByText('404')).toBeInTheDocument();
    })
});