import bg1 from '../imgs/bg1.jpeg'
import sizes from './sizes'
const styles = {
    root: {
        fontFamily: ' Montserrat, sans-serif',
        height: '100vh',
        backgroundSize: 'cover',
        background: `url(${bg1}) no-repeat center center fixed`,

    },
    stuff: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    items: {
        position: 'absolute',
        width: '60%',
        top: '30%',
        left: '20%',
        [sizes.down('xs')]: {
            width: '100%',
            position: 'relative',
            top: 'auto',
            left: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '& h1': {
                fontSize: '20px'
            },
            '& h2': {
                fontSize: '18px'
            }
        }

    },

}
export default styles