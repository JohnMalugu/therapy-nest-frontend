import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landing.page";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage></LandingPage>}></Route>
            </Routes>
        </BrowserRouter>
    );
}