import inori from './v/index';
import model from './model';
import App from './components/App'

inori.addModel(model);

inori.start(App, 'root');