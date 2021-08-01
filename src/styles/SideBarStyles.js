import sizes from "./sizes"
const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [sizes.down('xs')]: {
            flexDirection: 'row'
        }
    },
    active: {
        display: 'inline-block',
        margin: '1.5rem',
        fontSize: '20px',
        color: 'black',
        textDecoration: 'none',
        textAlign: 'center',
        lineHeight: '36px',
        border: '4px solid transperent',
        position: 'relative',
        verticalAlign: 'top',
        '&:after': {
            width: '0%',
            height: '4px',
            display: 'block',
            backgroundColor: 'gray',
            opacity: '0.5',
            content: '" "',
            position: 'absolute',
            top: '34px',
            left: '50%',
            transition: 'left 0.9s cubic-bezier(0.215, 0.61, 0.355,1), width 0.5s cubic-bezier(0.215, 0.61, 0.355,1)'
        },
        '&:hover:after': {
            width: '100%',
            top: '34px',
            left: 0
        },
        [sizes.down('xs')]: {
            fontSize: '17px'
        }


    }
}
export default styles