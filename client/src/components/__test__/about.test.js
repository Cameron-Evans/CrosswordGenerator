import {render, screen } from '@testing-library/react';
import About from '../Pages/About';
import AboutCameron from '../Pages/AboutCameron';
import { BrowserRouter } from 'react-router-dom';
import AboutDaniel from '../Pages/AboutDaniel';
import AboutEthan from '../Pages/AboutEthan';
import AboutCampbell from '../Pages/AboutCampbell';
import AboutDAngelo from '../Pages/AboutDAngelo';
import AboutPhil from '../Pages/AboutPhil';

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

    test("Render AboutCameron", () =>{
        render(
            <BrowserRouter>
                <AboutCameron/>
            </BrowserRouter>
        )

        const robotImg = screen.getByRole("img");

        expect(robotImg).toBeInTheDocument();
    })

    test("Render AboutCampbell", () =>{
        render(
            <BrowserRouter>
                <AboutCampbell/>
            </BrowserRouter>
        )

        const robotImg = screen.getByRole("img");

        expect(robotImg).toBeInTheDocument();
    })

    test("Render AboutDAngelo", () =>{
        render(
            <BrowserRouter>
                <AboutDAngelo/>
            </BrowserRouter>
        )

        const robotImg = screen.getByRole("img");

        expect(robotImg).toBeInTheDocument();
    })

    test("Render AboutDaniel", () =>{
        render(
            <BrowserRouter>
                <AboutDaniel/>
            </BrowserRouter>
        )

        const robotImg = screen.getByRole("img");

        expect(robotImg).toBeInTheDocument();
    })

    test("Render AboutEthan", () =>{
        render(
            <BrowserRouter>
                <AboutEthan/>
            </BrowserRouter>
        )

        const robotImg = screen.getByRole("img");

        expect(robotImg).toBeInTheDocument();
    })

    test("Render AboutPhil", () =>{
        render(
            <BrowserRouter>
                <AboutPhil/>
            </BrowserRouter>
        )

        const robotImg = screen.getByRole("img");

        expect(robotImg).toBeInTheDocument();
    })
});