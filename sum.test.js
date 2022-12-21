import { render ,fireEvent} from '@testing-library/react-native';
// const sum = require('./sum');
import App from './App';

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('should show login form', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('userName');
    console.log(input);
    // Events and assertions...
  })

// test('renders correctly', () => {
//   const {toJSON} = render(<App />);
//   expect(toJSON()).toMatchSnapshot();
// });

