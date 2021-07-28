const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF9F4',
        width: '80%',
        height: '200px',
        margin: '1rem',
        '& img': {
            borderRadius: '5px',
            margin: '1rem',
            height: '150px',
            width: '190px',
        },

    },
    imgContainer: {
        height: '85%',
        borderRight: '1px solid gray',
    },
    price: {
        display: 'flex',
        flexDirection: 'row',
        margin: '1rem'
    },
    actions: {
        '& svg': {
            color: 'black'
        }
    },
    quantity: {
        width: '40px',
        textAlign: 'center',
        border: '1px solid gray'
    },
    delete: {
        color: 'black',


    }
}


export default styles;