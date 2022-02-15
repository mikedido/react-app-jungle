import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('test@exemple.com')
    
    function handleInput(event) {
        setInputValue(event.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide');;
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem' onClick={(e) => setInputValue(e.target.value)}>
                Laissez-nous votre mail : 
            </div>
            <input
                placeholder='Entrez votre e-mail'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
		</footer>
	)
}

export default Footer