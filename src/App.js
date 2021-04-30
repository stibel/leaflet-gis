import React from "react";
import {BrowserRouter as Router,
        Switch,
        Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import InformationPage from "./pages/InformationPage";
import MapPage from "./pages/MapPage";
import {LRA1, LRA2, LRA3, USAF1, USAF2, PLAAF1, PLAAF2, Author1, Author2} from "./info/info";

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route path={"/Map"}>
                    <MapPage />
                </Route>
                <Route path={"/Info"}>
                    <InformationPage valueOne={"Czy chciałbyś wiedzieć więcej?"}/>
                </Route>
                <Route path={"/Author"}>
                    <InformationPage valueOne={Author1} valueTwo={Author2}/>
                </Route>
                <Route path={"/LRA"}>
                    <InformationPage valueOne={LRA1} valueTwo={LRA2}/>
                </Route>
                <Route path={"/USAF"}>
                    <InformationPage valueOne={USAF1} valueTwo={USAF2}/>
                </Route>
                <Route path={"/PLAAF"}>
                    <InformationPage valueOne={PLAAF1} valueTwo={PLAAF2}/>
                </Route>
            </Switch>
        </Router>

    )
}

export default App;