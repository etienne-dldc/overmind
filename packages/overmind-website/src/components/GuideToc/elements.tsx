import styled from '../../styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  left: calc(50vw + 400px);
  color: ${({ theme }) => theme.color.black};

  ul {
    list-style-type: none;
    padding-left: ${({ theme }) => theme.padding.small};
    font-size: 0.9em;
    line-height: 20px;
  }

  > ul {
    padding-left: 0;
    font-size: 0.8em;
  }

  a {
    cursor: pointer;
    display: block;
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.color.fade(theme.color.black, 0.2)};
  }

  @media (max-width: 1279px) {
    display: none;
  }
`
