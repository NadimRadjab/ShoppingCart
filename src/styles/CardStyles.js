import sizes from "./sizes";
const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '355px',
        height: '470px',
        boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',

        '& img': {
            width: '275px',
            height: '205px',
        },
        [sizes.down('xs')]: {
            width: '300px',
            height: '400px',
            '& img': {
                width: '155px',
                height: '125px',
            },
            '& h2': {
                fontSize: '20px'
            },
            '& p': {
                fontSize: '15px'
            },
        }
    },
    img: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            color: 'gray'
        },
        [sizes.down('xs')]: {
            '& button': {
                width: '10px',

            },
            '& h3': {
                fontSize: '14px'
            },
        }
    },

    quantity: {
        width: '40px',
        textAlign: 'center',
        border: '1px solid gray',
        [sizes.down('xs')]: {
            width: '20px',
        }
    },
}
export default styles;