import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles((theme) => ({
    '@global': {
        '.fade-exit': {
            color: 'blue',
            opacity: 1
        },
        '.fade-exit-active': {
            opacity: 0,
            transition: 'opacity 300ms ease-out'
        }
    },
    root: {
        display: 'flex',

    },

    hide: {
        display: 'none',
    },
    drawer: {
        flexShrink: 0,
    },
    drawerHeader: {
        display: 'flex',
        width: '500px',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    total: {
        margin: '0.6rem',
        width: '70%'

    },
    empty: {
        position: 'absolute',
        bottom: '400px',
        left: '120px'

    },
    checkout: {
        position: 'absolute',
        width: '150px',
        margin: '0.5rem',
        left: '40%',

    }
}));
export default (styles);