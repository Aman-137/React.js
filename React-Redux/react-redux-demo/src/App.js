import logo from './logo.svg';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';

import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import NewIceCreamContainer from './components/NewIceCreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ItemContainer cake />
                <ItemContainer />
                <CakeContainer />
                <HooksCakeContainer />
                <IceCreamContainer />
                <HooksIceCreamContainer />
                <NewCakeContainer />
                <NewIceCreamContainer />
                <UserContainer />
            </div>
        </Provider>

    );
}

export default App;
