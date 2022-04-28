import styled from 'styled-components'


export const Table = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin:0.5rem;
border: 1em black;
gap: 0.5em;
color:gray;
`
export const TableOne = styled.div`
width: 100%;
border-bottom: 2em;
color:gray;

tr{
    display: flex;
    flex-directon:row;
    justify-content: space-between;
    padding:10em;
    margin-left:10em;
    margin-right: 15em;
    text-align:center
}

`
export const TableTwo = styled.div`
box-shadow: 0 0 0.1em ;
width: 100%;
display: flex;
flex-direction:row;
justify-content: center;
flex-wrap: wrap;
text-align: center;
`
export const IconPerson = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`