import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';

import Home from "./routes/Home";
import Game from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import Contact from "./routes/Contact";
import About from "./routes/About";
import NotFound from "./routes/NotFound";

import cn from 'classnames';
import style from './style.module.css';


function App() {
    const match = useRouteMatch('/');
    return (

        <Switch>
            <Route path='/404' render={() => (
                <NotFound />
            )} />
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact} />
                    <div className={cn(style.wrap, { [style.isHome]: match.isExact })}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/home" component={Home} />
                            <Route path="/game" component={Game} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/about" component={About} />
                            <Route component={NotFound} />
                            <Redirect to='/404' />
                        </Switch>
                    </div>
                    <Footer />
                </>
            </Route>
        </Switch>

    )
}
export default App