import React, {useState} from 'react';
import "./style.css";

const BackTop = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<div className ="button_back">
    <i class="fa-solid fa-circle-arrow-up"  onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}}></i>
	</div>
);
}

export default BackTop;
