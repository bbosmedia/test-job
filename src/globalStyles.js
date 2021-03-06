import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    line-height: 22px;
    font-weight: 300;
}
a{
    text-decoration: none;
}
`

export default GlobalStyle
