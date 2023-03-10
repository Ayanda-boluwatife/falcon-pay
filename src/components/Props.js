import React from "react";
import styled from "styled-components";


function Person(props) {
    return (
      <Wrapper>
        <div className="person">
        <img src={props.image} alt={props.name} />
        <h1> {props.age}</h1>
        <p> {props.occupation}</p>
        <h2>get started <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg> {props.name}</h2>
      </div>
      </Wrapper>
    );
}

const Wrapper = styled.article`
/* .person{
    margin-top: 70px;
    width: 70%;
} */
.person h1{
    margin-top: 30px;
}
.person img{
    margin-top: 10px;
}
.person p{
margin-top: 20px;
max-width: 250px;
color: rgba(0, 0, 0, 0.5);
font-family: sans-serif;
}
.person h2{
    margin-top: 30px;
}
`

export default Person;
  