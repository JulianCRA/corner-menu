import React from 'react'
import classNames from 'classnames'

import styles from './RoundButton.module.css'

const RoundButton = ({tooltip, label, image, action, position}) => {
	const cn = classNames(
		styles.roundButton,
		{
			[styles.toRightTooltip] : position.toRight === true,
			[styles.toLeftTooltip] : position.toLeft === true
		}
	)

	return (
		<div
			data-tooltip = {tooltip||"TUCUTU"} 
			onClick = {action} 
			className = {cn} 
		>
			<div className = {styles.buttonImage}>
				<img src = {image} alt = ""/>
			</div>
			<label> {label||"PLACE of the HOLDER"} </label>
		</div>
	)
}

export default React.memo(RoundButton)