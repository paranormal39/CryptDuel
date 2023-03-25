import React from "react";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityLoader(){
    const { unityProvider } = useUnityContext({
        loaderUrl: 'Unity/OpenSource.loader.js',
        dataUrl: 'Unity/OpenSource.data',
        frameworkUrl: 'Unity/OpenSource.framework.js',
        codeUrl: 'Unity/OpenSource.wasm',
      });

    return(
       
        <div className="AppContainer">
        <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }}  />
        </div>
        
    );
}

export default UnityLoader;