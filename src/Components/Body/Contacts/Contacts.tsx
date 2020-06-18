/**@jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import OneLineSeries, {GoodsSeriesNameDiv, Name} from "../OneLineSeries";
import Icon from "../../SocialNetBar";
import chat from '../../../assets/images/chat.svg'
import arrow from '../../../assets/images/arrow.svg'
import {jsx,css} from "@emotion/core";
import ContactForm from "../ContactForm";


const Contacts: React.FunctionComponent = () =>
    <Root>
        <BlackLine>
            <Text>КОНТАКТИРУЕМ НЕ СТЕСНЯЕМСЯ</Text>
        </BlackLine>
        <ContactsInformation>
            <SocNetBarWrapper>
                <Title>ПОГОВОРИМ В Л.С. ?</Title>
                <SocNetItem css = {css`margin-top: -20px;`}>
                    <Icon icon={"instagram"}/>
                    <Text>@CHERNILNITSA.RF</Text>
                </SocNetItem>
                <SocNetItem>
                    <Icon icon={"vk"}/>
                    <Text>VK.COM/CHERNILNITSA.RF</Text>
                </SocNetItem>
                <SocNetItem>
                    <Icon icon={"telegram"}/>
                    <Text>T.ME/CHERNILNITSA.RF</Text>
                </SocNetItem>
                <SocNetItem>
                    <Icon icon={"facebook"}/>
                    <Text>FB.COM/CHERNILNITSA.RF </Text>
                </SocNetItem>
            </SocNetBarWrapper>
            <AddressBlackLine/>
            <Address>
                <Text>
                    <br/>
                    ЮР. АДРЕС:
                    <br/>Г. МОСКВА, УЛИЦА БАБЕНКО Д.777
                    <br/><br/><br/>
                    +7 (495) 777-77-77
                    <br/><br/><br/>
                    почта@чернильница.рф
                </Text>
            </Address>
        </ContactsInformation>
        <Title css={css`display:flex; justify-content: center`}>МОЖЕТ ПРЯМО НА САЙТЕ?</Title>
        <Chat>
            <img src={chat} alt="Chat"/>
            <Arrow><img src={arrow} alt="Тут"/></Arrow>
        </Chat>
        <Title css={css`display:flex; justify-content: center; margin-bottom: 36px`}>НАБЕРУ?</Title>
        <ContactForm/>
        <GoodsSeriesNameDiv css={css`margin-top: 70px`}><Name>Открыточку?</Name></GoodsSeriesNameDiv>
        <OneLineSeries first={"jesus2"} second={"jesus1"} third={"jesus3"}/>
    </Root>

export default Contacts;
const Root = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const BlackLine = styled.div`
width: 1144px;
height: 156px;
margin-bottom: 80px;
background: #000000;
display: flex;
justify-content: flex-end;
align-items: center;
& > * {
margin-right: 260px;
color: white;
}
`

const Title = styled.div`
margin-bottom: 70px;
font-family: Roboto Condensed,sans-serif;
font-weight: bold;
font-size: 44px;
line-height: 100%;

letter-spacing: 0.04em;
text-transform: uppercase;
`
const Text = styled.div`
font-family: Roboto Condensed,sans-serif;
font-weight: bold;
font-size: 16px;
line-height: 100%;

letter-spacing: 0.04em;
text-transform: uppercase;
`
const ContactsInformation =styled.div`
display: flex;
margin-bottom: 140px;
width: 1144px;
`
const SocNetBarWrapper = styled.div`
margin-bottom: -20px;
margin-right: 278px;
`
const SocNetItem = styled.div`
display: flex;
align-items: center;
& img{
width: 117px;
height: auto;
margin: 20px 30px 20px 0;
}
`
const AddressBlackLine =styled.div`
width: 20px;
height: 169px;
background: black;
`
const Address = styled.div`
margin-left: 28px;
max-width: 325px;
`
const Chat = styled.div`
position: relative;
margin-bottom: 70px;
display: flex;
justify-content: center;
align-items: center;
`
const Arrow = styled.div`
position: absolute;
top: 424px;
left: 70%;
`
