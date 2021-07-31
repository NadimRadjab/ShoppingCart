import sizes from "./sizes";
const styles = {
    root: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF9F4',
        width: '90%',
        height: '200px',
        margin: '1rem',
        [sizes.down('sm')]: {

        }


    },
    imgContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85%',
        borderRight: '1px solid gray',
        '& img': {
            borderRadius: '5px',
            margin: '1rem',
            height: '150px',
            width: '190px',
        },
        [sizes.down('sm')]: {
            '& img': {
                height: '90px',
                width: '120px',
            },
        }
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
        margin: '1rem',
        [sizes.down('sm')]: {
            '& p': {
                display: 'inline-block',
                fontSize: '18px'
            }
        },
        [sizes.down('xs')]: {
            '& p': {
                fontSize: '14px'
            }
        }

    },
    price: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    actions: {
        '& svg': {
            color: 'black'
        },
        [sizes.down('sm')]: {
            width: '90%',
            '& p': {
                display: 'inline-block',
                fontSize: '18px'
            }
        },
    },

    quantity: {
        width: '40px',
        textAlign: 'center',
        border: '1px solid gray'
    },
    delete: {
        color: 'black',
        position: 'absolute',
        bottom: 0,
        right: 0

    }
}


export default styles;