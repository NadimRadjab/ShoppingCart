import bg1 from '../imgs/bg1.jpeg'
const styles = {
    root: {
        height: '100vh',
        backgroundSize: 'cover',
        background: `url(${bg1}) no-repeat center center fixed`,
        color: 'white',
        display: 'flex',
        alignItems: 'center'
    },
    items: {
        position: 'absolute',
        top: '30%',
        left: '20%',
        width: '60%'

    }
}
export default styles