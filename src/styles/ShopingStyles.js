const styles = {
    root: {
        height: '100vh',

    },
    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    items: {
        height: '80%',
        display: 'grid',
        gridTemplateColumns: '1fr 4fr'
    },
    supplements: {
        overflow: 'none',
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: 'repeat(3,1fr)'
    }

}
export default styles;