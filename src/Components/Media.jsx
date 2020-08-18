import React, { useState, useRef } from 'react';
import Songs from './Songs';
import '../App.css';

const Media = props => {

    let spotify = useRef(null);
    let currently = useRef(null);

    const [state, setState] = useState(
        [
            {
                name: "Mario Castle",
                wpt: "song1",
                url: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3",
            },
            {
                name: "Mario Star",
                wpt: "song2",
                url: "https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3"
            },
            {
                name: "Mario Overworld",
                wpt: "song3",
                url: "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3"
            }
        ])


    const playSong = (index) => {
        spotify.current.src = state[index].url;
        setSource(index);
        currently.current.innerHTML = "Currently playing: " + state[index].name;
        spotify.current.play();
    }

    const [source, setSource] = useState(0)

    const playForward = () => {
        if (source < state.length - 1) {
            spotify.current.src = state[source + 1].url;
            currently.current.innerHTML = "Currently playing: " + state[source + 1].name;
            setSource(source + 1);            
            spotify.current.play();
        }
    }

    const playBackward = () => {
        if (source < state.length && source > 0) {
            spotify.current.src = state[source - 1].url;
            currently.current.innerHTML = "Currently playing: " + state[source - 1].name;
            setSource(source - 1);            
            spotify.current.play();            
        }
    }

    const randomSong = () => {
        let random = Math.floor(Math.random() * (state.length - 1));
        spotify.current.src = state[random].url;
        spotify.current.play();
        currently.current.innerHTML = "Currently playing: " + state[random].name;
    }

    return (
        <div className="container">
            <div className="audio-box">
                <div className="box-title">
                    <h2>4 Geeks Audio Player</h2>
                </div>
                <div className="playlist">
                    <div className="centrar">
                        <ul>
                            {
                                state.map((item, index) => {
                                    return <Songs
                                        name={item.name}
                                        key={index}
                                        index={index}
                                        playSong={playSong}
                                    />
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div ref={currently} className="currently">
                     ¡Welcome to the 4Geeks Academy Best Audio Player!          
                </div>
                <div className="controls">
                    <div className="vlme">
                        <span className="volum" onClick={() => {
                            if (spotify.current.volume > 1.3877787807814457e-16) { spotify.current.volume -= 0.1; console.log(spotify.current.volume) }
                        }}><i className="fas fa-volume-down mr-4"></i></span>
                        <span className="volum" onClick={() => {
                            if (spotify.current.volume < 1) { spotify.current.volume += 0.1; console.log(spotify.current.volume) }
                        }}><i className="fas fa-volume-up"></i></span>
                    </div>
                    <div className="musicControls">
                        <span><i className="fas fa-step-backward" onClick={() => playBackward()
                        }></i></span>
                        <span><i className="fas fa-play mx-3" onClick={() => {                            
                            spotify.current.play();
                        }}></i></span>
                        <span><i className="fas fa-pause mr-3" onClick={() => {
                            spotify.current.pause();
                        }}></i></span>
                        <span><i className="fas fa-step-forward" onClick={() => playForward()
                        }></i></span>
                    </div>
                    <span className="random"><i className="fas fa-random" onClick={() => randomSong()
                    }></i></span>
                    <span className="repeat"><i className="fas fa-redo-alt"></i></span>
                    <audio ref={spotify} src="" name="spotify"></audio>
                </div>
            </div>
        </div>
    )
}

export default Media;
