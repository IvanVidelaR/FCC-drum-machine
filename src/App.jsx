import { useEffect, useState, useCallback} from 'react'
import './App.css'
import DrumPad from "./components/DrumPad"
import drumpads from './components/drumpads'

function App() {
    const [drumPads, setDrumPad] = useState(drumpads)
    const [text, setText] = useState("")

    const handleTextChange = (newText) => {
        setText(newText);
    };

    const drumPadElements = drumPads.map(drumpad => 
    <DrumPad 
        key={drumpad.id}
        id={drumpad.id}
        keyBoard={drumpad.keyBoard}
        audio={drumpad.audio}
        description={drumpad.description}
        handleTextChange={handleTextChange}
    />)

	return (
        <div>
            <h1 class="drum-title">Drum Machine</h1>
            <div id="drum-machine">
            {drumPadElements}
                <div id="display">
                    {text}
                </div>
            </div>
            <div className="container-credits">
				<p>by</p>
				<a href="https://www.linkedin.com/in/ivanvidelar/" target="_blank">
					<p className="credits">IvanVidelaR </p>
				</a>
				<p>;</p>
				<a href="https://github.com/IvanVidelaR/FCC-random-quote-machine" target="_blank">
					<i className="fa-brands fa-square-github credits-github"></i>
				</a>
			</div>
        </div>
		
	)
}

export default App
