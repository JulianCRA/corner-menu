import React, { Component } from 'react'

import CornerMenu from './components/CornerMenu'
import RoundButton from './components/RoundButton'

export class App extends Component {
	
	render() {
		return (
			<div style = {{width: "calc(40px + 5vw)", backgroundColor: "#232425"}}>
				<CornerMenu 
					elements = { [1, 2, 3, 4, 5, 6, 7] }
					position = { { 
						bottom: true, 
						left: true
					} }
				/>
				
			</div>
		)
	}
}

export default App