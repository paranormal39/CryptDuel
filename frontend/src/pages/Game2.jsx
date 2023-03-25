import React from "react";
import {Route, BrowserRouter as Router,useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { getGoals,reset } from '../features/goals/goalSlice'
import {useEffect} from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function Game2(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.auth)
    const{goals,isLoading,isError,message} = useSelector(
        (state) => state.goals
    )

const { unityProvider } = useUnityContext({
        loaderUrl: 'Unity/Webbuid.loader.js',
        dataUrl: 'Unity/Webbuid.data',
        frameworkUrl: 'Unity/Webbuid.framework.js',
        codeUrl: 'Unity/Webbuid.wasm',
      });

    useEffect(()=>{
        if(isError){
            console.log(message)
        }
        if(!user){
            navigate('/login')
        }

        return()=>{
            dispatch(reset())
        }
    },[user,navigate,isError,message,dispatch])

    
    return(
       
        <div className="AppContainer" >
        <Unity unityProvider={unityProvider} style={{ width: 500, height: 720 }} />
        </div>
       
    );
}

export default Game2;