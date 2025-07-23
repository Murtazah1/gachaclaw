import PongGameWebGLBuild from "src/webgl"

export default function PongGame(){
    return (
        <>
        <h1>
            PongGame
        </h1>
        <div className="w-full h-full flex items-center justify-center">
            <PongGameWebGLBuild />
        </div>
        </>
    )
}