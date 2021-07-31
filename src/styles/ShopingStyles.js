import sizes from "./sizes";

const styles = {
    root: {
        height: '100vh',
        backgroundColor: '#FAF9F4',
        overflow: 'auto',
    },
    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    items: {
        height: '80%',
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
            gridTemplateColumns: '30% 70%',
        }

    },
    supplements: {
        overflow: 'none',
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