import Tilt from 'react-tilt';
import './Logo.css'
import mindmap from './mindmap.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop: '6px'}} src={mindmap} alt='mind map logo'></img> </div>
            </Tilt>
        </div>
    )
}

export default Logo;