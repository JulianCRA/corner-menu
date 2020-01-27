import React from 'react'

import RoundButton from '../RoundButton'
import CircularMenuToggler from '../CircularMenuToggler'

import styles from './CornerMenu.module.css'

const CornerMenu = ({elements, position}) => {
	const [openMenu, setOpenMenu] = React.useState(true)

	return(
		<div className = {styles.cornerMenu}>
			<CircularMenuToggler currentState = {openMenu} action = { () => setOpenMenu(!openMenu) } />
			<h2>{openMenu.toString()}</h2>
			<RoundButton image = {"https://i.picsum.photos/id/1015/200/200.jpg"}/>
			<RoundButton image = {"https://i.picsum.photos/id/1015/200/200.jpg"}/>
			<RoundButton image = {"https://i.picsum.photos/id/1015/200/200.jpg"}/>
		</div>
	)
}

export default CornerMenu