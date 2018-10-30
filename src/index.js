import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// react route libs
import { BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';


//Components 
import Posts from './components/posts';
import Profiles from './components/profiles';
import PostItems from './components/post-items'
import NotFound from './components/404'

class App extends Component {
    render() {
        return <div>Home</div>
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div >
            <header>
                {/* To give style on active like this  */}
                {/* <NavLink to='/' activeStyle={{ color: 'red'}} >Home</NavLink><br/> */}

                {/* Another way to give active claSs on Navlist Selected */}
                <NavLink to='/' activeClassName="selected" >Home</NavLink><br/>
                <NavLink to='/post' >Posts</NavLink><br />
                <NavLink to='/profile'>Profiles</NavLink><br />

                {/* <Link to='/'>Home</Link><br />
                <Link to='/post'>Posts</Link><br />
                <Link to='/profile'>Profiles</Link><br /> */}
                <hr />
            </header>
            <Switch>
                <Route path="/post/:id" component={PostItems}></Route>
                <Route path="/post" component={Posts}></Route>
                <Route path="/profile" component={Profiles}></Route>
                <Route exact path="/" component={App}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'))