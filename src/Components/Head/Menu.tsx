import React from "react";
import styled from "@emotion/styled";

const Menu = styled.div`
width: 394px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 42px;
padding-left: 388px;
padding-right: 1138px;
font-family: Roboto Condensed;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 100%;
`

export default class MenuHead extends React.Component{

    render(){
        return <Menu>
                <div>
                    Открытки
                </div>
                <div>
                    О нас
                </div>
                <div>
                    Контакты
                </div>
                <div>
                    Доставка
                </div>

            </Menu>
    }

}