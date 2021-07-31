const sizes = {
    up() {

    },
    down(size) {
        const sizes = {
            xs: '655.98px',
            sm: '877.98px',
            md: '991.98px',
            lg: '1250.98px',
            xl: '1500px'
        }
        return `@media(max-width:${[sizes[size]]})`
    }
}
export default sizes