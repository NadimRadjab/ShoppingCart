const styles = {
    root: {
        display: 'flex',

    },
    navigation: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '270px',
        '& a': {
            textDecoration: 'none',
            color: 'gray',
            fontSize: '22px'
        },
        '& svg': {
            color: 'gray',
            fontSize: '40px'
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


export default styles