import React from 'react';
import styled from "@emotion/styled";

const Root = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
background: url("https://i.pinimg.com/originals/e7/42/80/e7428019f4dc3be767ee4d481d7c3d55.jpg") center no-repeat;
background-size: cover;

`

const Title = styled.div`
  font-size: 90px;
  color: cornflowerblue;
  font-family: Roboto;
  font-weight: 900;
  padding: 60px;
  background-color: white;
  opacity: .9;
  border-radius: 60px;
`

export default class App extends React.Component {

    render() {
        return <Root>
            <Title>
                ПОШЕЛ НАХУЙ
            </Title>
        </Root>
    }

}
