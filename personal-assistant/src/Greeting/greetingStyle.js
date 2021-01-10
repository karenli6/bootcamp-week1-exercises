import styled from 'styled-components'
import './fonts.css'
import backimg from './cloud.jpg'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    font-family: 'Arvo', serif;
    background-image: url(${backimg});    
    background-size: cover;
    height:52vw;
    text-align:center;
    display:flex;
    flex-direction:column;
    background-color:#e6ecf5;
    overflow-y:hidden;
`

export const Row = styled.div`
    
    
    font-family: 'Arvo', serif;
    float:top;
    width:100%;
    /* padding:10px; */
    height:80%;
    justify-content: center;
    /* background-image: url(${backimg});    
    background-size: contain; */


`

export const StyledLink = styled(Link)`
    font-family: 'Arvo', serif;
    font-size: 2vw;
    padding: 2vw;
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
export const Row2 = styled.div`
    font-family: 'Arvo', serif;
    float:top;
    width:100%;
    /* padding:10px; */
    height:30%;
 
    justify-content: center;
    /* background-color: #2b3f5c; */

`


export const Column2 = styled.div`
    color:white;
    /* display:inline; */
    font-size:5vw;
    background-color:#2b3f5c;
    justify-content:center;
    border-radius: 30px;
    margin-top:3vw;
    margin-left:9vw;
    margin-right:9vw;
  

    box-shadow: 5px 5px 5px 5px white;
    
`