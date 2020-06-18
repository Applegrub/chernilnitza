import React from "react";
import styled from "@emotion/styled";


export default class ContactForm extends React.Component {

    state = {
        name:'',
        phone:'',
    }

    handleChange = (e: any, position: string) => this.setState({[position]: e.target.value})
    handleAdd = () => this.setState({ name: '', phone: '' })

    render() {
        const {name, phone} = this.state
        return <Root>
            <Header>ХОЧЕШЬ ЭКСКЛЮЗИВНЫЙ ДИЗАЙН?</Header>
            <Input
                placeholder={'ТВОЁ ИМЯ'}
                value={name}
                onChange={(e: any) => this.handleChange(e, 'name')}
            />
            <Input
                placeholder={'ТВОЙ ТЕЛЕФОН'}
                value={phone}
                onChange={(e: any) => this.handleChange(e, 'phone')}
            />
            <Button onClick={this.handleAdd}>СВЯЖИТЕСЬ СО МНОЙ!</Button>
        </Root>
    }
}

const Root = styled.div`
margin: 44px 10px 0 10px;
width: 368px;
height: 498px;
border: 2px solid #000000;
box-sizing: border-box;
& > * {
display: flex;
justify-content: center;
align-items: center;
text-align:center;
width: 364px;
height: 123.5px;
border: 2px solid #000000;
box-sizing: border-box;
}
`
const Header = styled.div`
font-family: Roboto Condensed,sans-serif;
font-weight: bold;
font-size: 16px;
line-height: 100%;

letter-spacing: 0.04em;
text-transform: uppercase;
color: white;
background: #000000;
`
const Input = styled.input`
& > *{
font-family: Roboto Condensed,sans-serif;
font-weight: bold;
font-size: 16px;
line-height: 100%;
letter-spacing: 0.04em;
text-transform: uppercase;
}`

const Button = styled.button`
background: white;
`
