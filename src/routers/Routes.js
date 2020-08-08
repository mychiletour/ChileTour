import React from 'react'
import { Route } from 'react-router-dom';
import CardAPI from '../services/CardAPI';

const Routes = () => {
    return (
        <div>
        <Route exact={true} path="/ChileTour" key="Santiago">
        <CardAPI url='https://api.npoint.io/cef0bf8341dd206787a2' />
    </Route>
    <Route path="/ChileTour/SantiagoTours" key="SantiagoTours">
        <CardAPI url="https://api.npoint.io/c1bd0d54cb63250a88db" />
    </Route>
    <Route path="/ChileTour/ValleMaipo" key="ValleMaipo">
        <CardAPI url="https://api.npoint.io/f5949de330819643a857" />
    </Route>
    <Route path="/ChileTour/ValleCasablanca" key="ValleCasablanca">
        <CardAPI url="https://api.npoint.io/0435b0b7acec2e2840ef" />
    </Route>
    <Route path="/ChileTour/ValleColchagua" key="ValleColchagua">
        <CardAPI url="https://api.npoint.io/67ba46580a49d39c888b" />
    </Route>
    <Route path="/ChileTour/ValleNevado" key="ValleNevado">
        <CardAPI url="https://api.npoint.io/c6b9578b9b4b83ea3310" />
    </Route>
    <Route path="/ChileTour/Farellones" key="Farellones">
        <CardAPI url="https://api.npoint.io/59a585666248ffc7c403" />
    </Route>
    <Route path="/ChileTour/ElColorado" key="ElColorado">
        <CardAPI url="https://api.npoint.io/7418de77e3183bd866ce" />
    </Route>
    <Route path="/ChileTour/LaParva" key="LaParva">
        <CardAPI url="https://api.npoint.io/d3abcf86561cdf2b30d8" />
    </Route>
    <Route path="/ChileTour/Portillo" key="Portillo">
        <CardAPI url="https://api.npoint.io/8ec99a1150e771d8b467" />
    </Route>
    <Route path="/ChileTour/Valparaiso" key="Valparaiso">
        <CardAPI url="https://api.npoint.io/bc4301390f6c6d793e3d" />
    </Route>
    <Route path="/ChileTour/IslaNegra" key="IslaNegra">
        <CardAPI url="https://api.npoint.io/552fb358d307533a4b39" />
    </Route>
    <Route path="/ChileTour/Cruceros" key="Cruceros">
        <CardAPI url="https://api.npoint.io/00ff321e8b059dee9532" />
    </Route>
    <Route path="/ChileTour/Monticello" key="Monticello">
        <CardAPI url="https://api.npoint.io/eb9c5df8755d7192355a" />
    </Route>
    <Route path="/ChileTour/EnjoySantiago" key="EnjoySantiago">
        <CardAPI url="https://api.npoint.io/1da2c2d50539b2041d59" />
    </Route>
    <Route path="/ChileTour/BaliHai" key="BaliHai">
        <CardAPI url="https://api.npoint.io/31da195ebc9b8f6ad808" />
    </Route>
    <Route path="/ChileTour/AutosAntiguos" key="AutosAntiguos">
        <CardAPI url="https://api.npoint.io/bb73c20999a95bf447d2" />
    </Route>
    <Route path="/ChileTour/Safari" key="Safari">
        <CardAPI url="https://api.npoint.io/35b4142aa1feb1a2c4ff" />
    </Route>
        </div>
    )
}

export default Routes
