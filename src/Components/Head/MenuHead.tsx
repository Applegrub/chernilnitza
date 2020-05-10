import React from "react";
import styled from "@emotion/styled";

const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding: 10px;
width: 394px;
height: 36px;
left: 388px;
top: 366px;
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