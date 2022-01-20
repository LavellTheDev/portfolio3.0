import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
     const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: true, 
        backSpeed:  50,
        backDelay: 1500,
        strings: ['Software Developer', 'Freelancer', 'Muay Thai Fighter', 'Graphic Designer'  ] });
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/kzakat_c-01.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>What's up, my name is</h2>
                    <h1>Lavell Wesley</h1>
                    <h2>But you can call me</h2>
                    <h1>L4zieeKzA</h1>
                    <h3>I am a <span ref={textRef}>Fighter</span> </h3>
                </div>
                <a href="#portfolio">
                <img src="assets/icons8-double-down.gif" alt="" />
                </a>
            </div>
        </div>
    )
}
