import PongGameWebGLBuild from "src/webgl"

export default function PongGame(){
    return (
        <>
        <h1>
            PongGame
        </h1>
        <div className = "w-100 h-100 flex relative justify-items-center">
            <PongGameWebGLBuild/>
        </div>
        </>
    )
}