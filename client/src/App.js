import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import GoogleMap from './components/GoogleMap/GoogleMaps';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/Signup';
//import Ratings from './components/Ratings/Ratings';
//import Home from './pages/Home';
//import Maps from './components/Maps';
//import Detail from './pages/Detail';
//import NoMatch from './pages/NoMatch';
//import Login from './pages/Login';
//import Signup from './pages/Signup';
//import Nav from './components/Nav';
//import { StoreProvider } from './utils/GlobalState';
//import LandingPage from './componets/LandingPAge';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
        <h1 style={{textAlign: 'center' , fontSize: '50px' }}>Spot-A-pot</h1>
          <GoogleMap />
          </div>
          <div>
          <Login />
          <SignUp />
         
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
