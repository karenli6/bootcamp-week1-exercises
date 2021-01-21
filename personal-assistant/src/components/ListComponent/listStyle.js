import styled from 'styled-components'
import '../fonts.css'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    height:52vw;
    text-align:center;
    display:flex;
    flex-direction:row;
    background-color:#e6ecf5;
    overflow-y:hidden;
`

export const Column = styled.div`
    font-family: 'Arvo', serif;
    float:left;
    top:0;
    width:50%;
    height:100%;
    justify-content: center;
    padding-top:10%;
    /* padding-bottom:10%; */

`

export const Form = styled.form`
    background-color:hsl(216, 36%, 26%, 0.2);
    justify-content:center;
    display:flex;
    width:50%;
    margin-left:8vw;
    padding:3vw;
    border-radius:30px;
    margin-bottom:4vw;

    flex-direction:column;

`

export const Column2 = styled.div`
    color:white;
    font-family: 'Abel', sans-serif;

    background-color:#2b3f5c;
    justify-content:center;
    border-radius: 30px;
    padding:30px;
    margin:20px;
    width:49%;
    height:72%;
    box-shadow: 5px 5px 5px 5px #a0acbd;
    
`

export const StyledLink = styled(Link)`
    font-family: 'Arvo', serif;
    font-size: 2vw;
    padding: 1.2vw;
    color: #2b3f5c;
    border-radius: 20px;
    border: 5px solid #2b3f5c;
  
    text-decoration:none;
	
	&:hover {
        color: white;
        border: 5px solid white;
        opacity: 0.7;
	}
`

export const SearchBar = styled.input`
    font-family: 'Arvo', serif;
    margin-bottom:2vw;
`