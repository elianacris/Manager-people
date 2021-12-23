import styled from 'styled-components'


export const Table = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin:20px;
border: 1px black;
gap: 30px;
color:gray;
`
export const TableOne = styled.div`
width: 100%;
box-shadow: 0 0 3px gray;
border-bottom: 2px;
color:gray;
tr{
    display: flex;
    flex-directon:row;
    justify-content: space-between;
    padding:10px;
    margin-left:10px;
    margin-right: 15px;
    text-align:center
}

`
export const TableTwo = styled.div`
box-shadow: 0 0 3px gray;
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