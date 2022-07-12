import React from "react"
import Icon from '@mui/material/Icon';

export default ( {name})=>{
    return (
        <Icon style={{
            border:"3px solid orange",
            borderRadius:"50px",
            color:"orange",
            padding:"15px",
            fontSize:"250%"
        }}>{name}</Icon>
    )
}