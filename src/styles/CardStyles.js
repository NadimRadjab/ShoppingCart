const styles = {
    root: {
        width: '355px',
        height: '470px',
        boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',

        '& img': {
            width: '275px',
            height: '205px',
        }
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            color: 'gray'
        }
    },

    quantity: {
        width: '40px',
        textAlign: 'center',
        border: '1px solid gray'
    },
}
export default styles;