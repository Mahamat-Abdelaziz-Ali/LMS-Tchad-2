import ReactPlayer from "react-player";
import { useEffect, useState } from 'react';
import { Play } from "lucide-react";
import { ProgressValue } from "@base-ui/react";


function videoPlayer({width = '100%', height = "100%", url, onProgressUpdate, progressData}) {

    const [playing, setPlaying] = useState(false);
    const [volume, setVolume]= useState(0.5);
    const [muted, setMuted] = useState(false);
    const [played, set,Played] = useState(0);
    const [seeking, setSeeking] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [showControls, setShowControls] = useState(true);

    //console.log(played, 'played');
    
    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const controlsTimeOutRef = useRef(null);


    function handlePlayerAndPause() {
        setPlaying(!playing);
    }


    function handleProgress(state) {
        if(!seeking) {
            setPlayed(state.played)
        }
    }
    
    function handleRewind() {
        playerRef?.seekTo(playerRef?.current?.getCurrentTime() - 5)
    }

    function handleForward() {
        playerRef?.seekTo(playerRef?.current?.getCurrentTime() + 5)
    }

    function handleToggleMute() {
        setMuted(!muted)
    }

    function handleSeekChange(newValue) {
        setPlayer(newValue[0])
        setSeeking(true)
    }

    function handleSeekMouseUp() {
        setSeeking(false)
        playerRef.current?.seekTo(played)
    }

    function handleVolumeChange(newValue) {
        setVolume(newValue[0])
    }

    function pad(string) {
        return ("0" + string).slice(-2)
    }

    function formatime(seconds) {
        const date = new Date(seconds *1000);
        const hh = date.getUTCHours();
        const mm = date.getUTCMinutes();
        const ss = pad(date.getUTCSeconds());

        if(hh) {
            return `${hh} : ${pad(mm)} : ${ss}`
        }

        return `{mm}:${ss}`
    }

    const handleFullScreen = useCallback(()=>{
        if(!isFullScreen){
            if(playerContainerRef?.current.requestFullScreen){
             playerContainerRef?.current.requestFullScreen()   
            }
        } else {
            if(document.exitFullscreen) {
                document.exitFullscreen()
            }
        }
    }, [isFullScreen]);

    function handleMouseMove(){
        setShowControls(true)
        clearTimeout(controlsTimeoutRef.current)
        controlsTimeOutRef.current = setTimeout(()=>setShowControls(false), 3000)
    }

    useEffect(()=>{

        const handleFullScreenChange = ()=> {
            setIsFullScreen(document.fullscreenElement)
        }

        document.addEventListener('fullscreenchange', handleFullScreenChange)

        return ()=>{
            document.removeEventListener('fullscreenchange', handleFullScreenChange)
        }

    }, []);

    useEffect(()=>{
        if(played === 1) {
            onProgressUpdate({
                ...progressData,
                ProgressValue : played,
            })
        }
    })

    console.log(currentLecture, 'currentLecture');

    return (
        <div ref={playerContainerRef}
        className={`relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ease-in-out 
        ${isFullScreen ? 'w-screen h-screen' : ""}
        `}
        style={{width, height}}
        onMouseMove={handleMouseMove}
        onMouseLeave={()=setShowControls(false)>}
        >
            <ReactPlayer
            ref ={playerRef}
            className = "absolute top-0 left-0" 
            width ='100%'
            height = '100%'
            url = {url}
            playing = {playing}
            volume = {volume}
            muted = {muted}
            onProgress = {handleProgress}
            controls
            />
            {
                showControls && (<div className={`absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4 
                    transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'

                }`}>
                    <Slider
                    value={[played * 100]}
                    max = {100}
                    step={0.1}
                    onValueChange={(value)=> handleSeekChange([value[0]/100])}
                    onValueCommit = {handleSeekMouseUp}
                    className = "w-full mb-4"
                    />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Button variant = "ghost" size = "icon" onClick={handlePlayerAndPause}
                            className = "text-xhite hover:text-primary hover:bg-gray-700"
                            >
                                {
                                    playing ? <pause className="h-6 w-6"/> : <play className="h-6 w-6"/>
                                }
                            </Button>
                            <Button onClick={handleForward}
                            className="text-white bg-transparent hover:text-white hover:bg-gray-700"
                             variant = "ghost" size = "icon">
                                <RotateCw className="h-6 w-6"></RotateCw>
                            </Button>
                            <Button onClick={handleToggleMute}
                            className="text-white bg-transparent hover:text-white hover:bg-gray-700"
                             variant = "ghost" size = "icon">
                                {
                                    muted ? (<VolumeX className="h-6 w-6" />) : (<Volume2 className="h-6 w-6"/>)
                                }
                            </Button>
                            <Slider 
                            value= {[volume * 100]}
                            max={100}
                            step={1}
                            onValueChange={(value)=> handleVolumeChange([value[0]/100])}
                            className="w-24 bg-red-900"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="text-white">
                                {
                                    formatTime(played * (playerRef?.current?.getDuration() || 0))
                                }  /{formatTime(playerRef?.current?.getDuration() || 0)}
                            </div>
                            <Button className="text-white bg-transparent 
                            hover:text-white hover:bg-gray-700"
                             variant = "ghost" size = "icon"
                             onClick={handleFullScreen}
                             >
                                {
                                    isFullScreen? <Minimize className="h-6 w-6" /> : <Maximize />
                                }
                             </Button>
                        </div>
                        </div>                      //slider shcd add
                </div>
            )}
        </div>
    );
}


export default videoPlayer;







