const styles = {
    root: {
        display: 'flex',
        height: '270px',
    },
    navigation: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        '& a': {
            textDecoration: 'none',
            color: '#959498',
            fontSize: '22px'
        },
        '& svg': {
            color: '#959498',
            fontSize: '40px'
        },
        '& a:hover': {
            transform: 'scale(1.2)'
        },
        '& svg:hover': {
            transform: 'scale(1.2)'
        }
    },
    count: {
        color: 'white',
        position: 'relative',
        bottom: '15px',
        right: '10px',
        width: '25px',
        height: '25px',
        backgroundColor: 'red',
        borderRadius: '50%',
    }

}


export default styles;