import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import Header from './Header';
import QuestionPage from './QuestionPage';

const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css2?family=Quintessential&family=Roboto:wght@300;400;500&display=swap');
body {
  background: #2d2d2d;
  color: #fff;
  font-family: Roboto, sans-serif;
}
`
const App = () => {
  return (
    <div>
      <Reset/>
      <GlobalStyle/>
      <Header />
      <QuestionPage/>
    </div>
  );
}

export default App;
