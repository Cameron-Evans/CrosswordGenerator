import {render, screen } from '@testing-library/react';
import Footer from '../Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

describe('Footer', () => {
    test("Render correctly", () =>{
        render(
            <BrowserRouter>
                <Footer/>
            </BrowserRouter>
        )

        const messageInput = screen.getByRole("button");

        expect(messageInput).toBeInTheDocument();
    })
});