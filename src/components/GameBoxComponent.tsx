interface GameBox{
    imgsrc: string;
    gameName: string;
}

function GameBoxComponent({imgsrc, gameName} : GameBox){
    return( 
        // add onclick function that makes it go to the respective game 
        // button onclick function => goes to /routes/games/{game}.tsx
        <button>
            <div className="w-fit h-fit bg-pink-500 border-black-400 border-4 m-5">
                <img src= {imgsrc} className="w-fit h-fit animate-spin"></img>
            </div>
        </button>
    );

}

export default GameBoxComponent;