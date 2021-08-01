import bg1 from '../imgs/bg1.jpeg'
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
        alignItems: 'center'
    },
    items: {
        position: 'absolute',
        top: '30%',
        left: '20%',
        width: '60%'

    },

}
export default styles