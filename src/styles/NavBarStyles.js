const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '270px',
        '& a': {
            textDecoration: 'none',
            color: 'gray',
            fontSize: '22px'
        },
        '& a svg': {
            fontSize: '40px'
        }
    },
    drawerHeader: {
        width: '500px',
        display: 'flex',
        margin: '1rem'
    },
    total: {
        // position: 'absolute',
        // top: 130,
        // right: 120
    }
}
export default styles