import { Unity, useUnityContext } from "react-unity-webgl";
import type PongGame from "~/routes/pong-game";

const PongGameWebGLBuild = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/webgl/Build.loader.js",
    dataUrl: "build//webgl/Build.data.unityweb",
    frameworkUrl: "build/webgl/Build.framework.js.unityweb",
    codeUrl: "build/webgl/Build.wasm.unityweb",
  });

  return (
    <div className="flex relative bg-black-200">
        <Unity unityProvider={unityProvider} />
    </div>
  );
}

export default PongGameWebGLBuild;