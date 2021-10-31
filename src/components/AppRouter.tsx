import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import {privatRoutes, publicRoutes, RouteNames} from "../router";
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hook/UseTypeSelector";

const AppRouter = () => {
       const{isAuth} = useTypedSelector(state=>state.auth)
    return (
        isAuth ?
            <Switch>
                {privatRoutes.map(route=>
                   <Route path={route.path}
                          exact={route.exact}
                          component={route.component}
                          key={route.path}
                   />
                )}
                <Redirect to={RouteNames.EVENT}/>
            </Switch>

            :
            <Switch>
                {publicRoutes.map(route=>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}
                    />
                )}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
    );
};

export default AppRouter;