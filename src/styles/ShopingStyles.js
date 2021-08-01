import sizes from "./sizes";

const styles = {
    root: {
        height: '100vh',
        position: 'relative',
        backgroundColor: '#FAF9F4',
        overflow: 'auto',
        fontFamily: ' Montserrat, sans-serif',
    },
    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    items: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        [sizes.down('lg')]: {
            gridTemplateColumns: '1fr 2fr',
        },
        [sizes.down('md')]: {
            gridTemplateColumns: '20% 80%',
        },
        [sizes.down('sm')]: {
            gridTemplateColumns: '40% 60%',
        },
        [sizes.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }

    },
    supplements: {
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: 'repeat(3,1fr)',
        [sizes.down('lg')]: {
            gridTemplateColumns: 'repeat(2,1fr)',
        },
        [sizes.down('sm')]: {
            gridTemplateColumns: '1fr',
        }
    }

}
export default styles;