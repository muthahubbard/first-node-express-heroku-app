import React from "react";  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import routes from "../shared/routes";

React.render(<Router>{routes}</Router>, document.getElementById('app'));
