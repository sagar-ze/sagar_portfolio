import React from 'react'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

import './style.scss'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<h4>Follow me on social media</h4>
				<div className='footer__social-icons'>
					<a
						href='https://github.com/sagar-ze'
						rel='noopener noreferrer'>
					
						<GitHubIcon className='social-icon' />
					</a>
					<a
						href='https://www.linkedin.com/in/sagar-gh/'
						rel='noopener noreferrer'>
						<LinkedInIcon className='social-icon' />
					</a>
					
				</div>
			
				<p>Copyright © Sagar {new Date().getFullYear()}</p>
			</div>
		</div>
	)
}

export default Footer
