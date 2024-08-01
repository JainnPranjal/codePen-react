import React, { useContext,useState,useEffect } from 'react'
import{DataContext}from '../context/DataProvider'
import { Box, styled } from '@mui/material';

const Spacin=styled(Box)`
padding:16px 0px;
height:41vh;
`

function Results() {
    const[src,setSrc]=useState('');
    const {html,css,js}=useContext(DataContext);

    const srcCode=`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `

    useEffect(()=>{
        const timeout =setTimeout(()=>{
            setSrc(srcCode);
        },2000)

        return ()=>clearTimeout(timeout);
    },[html,css,js])

  return (
    <Spacin>
        <iframe srcDoc={src} 
        frameBorder="0"
        sandbox='allow-scripts'
        width="100%"
        height="100%"
        title='Output'
        />
    </Spacin>

    
  )
}

export default Results;