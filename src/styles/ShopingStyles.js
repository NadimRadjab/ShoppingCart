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