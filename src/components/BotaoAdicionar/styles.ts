import styled from 'styled-components'

export const Cicle = styled.a`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  justify-content: center;
  font-size: 40px;
  text-decoration: none;
  align-items: center;
  border-radius: 50%;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`
