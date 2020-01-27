import React from 'react'

import styles from './RoundButton.module.css'

const RoundButton = ({tooltip, label, image}) => {
	return (
		<div
			data-tooltip = {tooltip||"TUCUTU"} 
			onClick = { () => console.log('CLICK') } 
			className = {styles.roundButton} 
		>
			<div className = {styles.buttonImage}>
				<img src={image} alt=""/>
			</div>
			<label> {label||"PLACE of the HOLDER"} </label>
		</div>
	)
}

export default RoundButton