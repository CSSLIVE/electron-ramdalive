import React, { Component ,useState} from 'react'
import {CodeEditor} from './Component/CodeEditor';
import {codes} from './Code/code';
import * as R from 'ramda';
import styled from 'styled-components';
import { Provider,Block,Box } from "reakit";
import theme from "reakit-theme-default";
import { TitleBar, Toolbar} from 'react-desktop/macOs';
const scope={R,styled}
const App=()=>{
    //const [size,setSize]=useState("");
    return (
      <Provider theme={theme}>
      <Box>
      <Block  style={{border:'1px solid rgba(177, 224, 210, 0.1)',background:"rgba(243, 243, 243, 1.000)", width:"95%",margin:'10px auto',borderRadius:'5px'}}>
         {/* <TitleBar controls inset 
         onCloseClick={() => window.close()}
         onMinimizeClick={() => console.log('Minimize window')}    
         >
            <Toolbar height="35" horizontalAlignment="center"
              
            />
         </TitleBar> */}
         
      {  codes.map((code,i)=>(
           <CodeEditor code={code.code} scope={scope} />
          )) 
        }
        </Block>
       </Box>
      </Provider>
    )
  
  }

export default App;