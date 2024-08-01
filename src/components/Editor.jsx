import { Box, styled } from '@mui/material';
import React, { useState } from 'react'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';

import '../App.css'

const Container=styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding :0px 8px 8px;
`
const Heading=styled(Box)`
 background:#1d1e22;
 display:flex;
 padding:9px 12px;
`

const Headin=styled(Box)`
display:flex;
background:#060606;
color:#AAAEBC;
justify-content:space-between;
font-weight:700;
`
function Editor({heading,icon,color,value,onChange}) {
 
    const [open,setOpen]=useState(true);

    const handleChange = (editor,data,value)=>{
        onChange(value);
    }
    
  return (
    <Container style={open?null:{flexGrow:0}}>
        <Headin>
            <Heading>
            <Box 
            component="span" style={{
                 width:20,
                height:20,
                placeContent:"center",
                marginRight:5,
                borderRadius:5,
                paddingBottom:2,
                background:color,
                display:"flex",
                color:'#000'}}>
            {icon}</Box> 
            {heading}
            </Heading>
            <CloseFullscreenIcon
             fontSize='small'
             style={{alignSelf: "center"}}
             onClick={()=> setOpen(prevState => !prevState)}
            />
        </Headin>
        
        
        <ControlledEditor 
        value={value}
        onBeforeChange={handleChange}
        options={{
            theme:'material',
            lineNumbers:true
        }}
        className='controlled-editor'
        />
        
        
    </Container>
  )
}

export default Editor;