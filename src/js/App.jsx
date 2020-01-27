import React, { Component } from 'react'

import CornerMenu from './components/CornerMenu'

const action = msg => console.warn("Message", msg)

const elements = [
	{
		type : "button",
		tooltip : "Save the lego board to a file.",
		label : "DOWNLOAD",
		image : `https://i.picsum.photos/id/${Math.round(Math.random()*500)}/200/200.jpg`,
		action : () => action("download")
	},
	{
		type : "button",
		tooltip : "Load another image.",
		label : "LOAD",
		image : `https://i.picsum.photos/id/${Math.round(Math.random()*500)}/200/200.jpg`,
		action : () => action("loading")
	},
	{
		type : "button",
		tooltip : "Change the disposition of the lego bricks",
		label : "SHUFFLE",
		image : `https://i.picsum.photos/id/${Math.round(Math.random()*500)}/200/200.jpg`,
		action : () => action("shuffle")
	},
	{
		type : "button",
		tooltip : "Watch as the triangles are placed progressively.",
		label : "ANIMATE",
		image : `https://i.picsum.photos/id/${Math.round(Math.random()*500)}/200/200.jpg`,
		action : () => action("animate")
	},
	{
		type : "range",
		label : "THRESHOLD",
		image : `https://i.picsum.photos/id/${Math.round(Math.random()*500)}/200/200.jpg`,
		min : 0,
		max : 1,
		step : 0.025,
		value : 0.5,
		action : value => action(value)
	},
]

export class App extends Component {
	
	render() {
		return (
			<React.Fragment>
				<div style = {{width: "calc(40px + 5vw)", position: "absolute", left:"200px", top:"100px"}}>
					<CornerMenu 
						elements = { elements }
						position = { { 
							bottom: false, 
							top: true,
							toRight: true
						} }
					/>
					
				</div>
				<div style = {{width: "calc(40px + 5vw)", position: "absolute", right:"200px", bottom:"100px"}}>
					<CornerMenu 
						elements = { elements }
						position = { { 
							bottom: true, 
							top: false,
							toRight: false,
							toLeft: true
						} }
					/>
					
				</div>
			</React.Fragment>
		)
	}
}

export default App