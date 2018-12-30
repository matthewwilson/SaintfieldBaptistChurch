import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.2';
import 'jest-enzyme';

configure({ adapter: new Adapter() });