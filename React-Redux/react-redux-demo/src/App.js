import logo from './logo.svg';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';

import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CakeContainer />
                <HooksCakeContainer />
            </div>
        </Provider>

    );
}

export default App;
