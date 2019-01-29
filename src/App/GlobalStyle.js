import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  .fa {
    vertical-align: middle;
  }

  .bg-gray {
    background: #e9ecef;
  }

  .link-gray {
    color: rgba(0,0,0,.5);
    &:hover{
      color: rgba(0,0,0,.9);
      text-decoration: none;
    }
  }

  .box-shadow {
    box-shadow: 0 .15rem .55rem rgba(0, 0, 0, .07);
  }
`

export default GlobalStyle
