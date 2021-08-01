import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';
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
    drawerPaper: {
        [sizes.down('sm')]: {
            width: '340px'
        }

    },
    cardsContainer: {

    },
    drawerHeader: {
        display: 'flex',
        width: '500px',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
        [sizes.down('sm')]: {
            width: '300px'
        }

    },

    total: {
        margin: '0.6rem',
        width: '70%',
    },
    empty: {
        position: 'absolute',
        bottom: '400px',
        left: '120px',
        [sizes.down('sm')]: {
            fontSize: '20px',
            bottom: '400px',
            left: '80px',
        },
        [sizes.down('xs')]: {
            fontSize: '20px',
            bottom: '400px',
            left: '80px',
        }

    },
    checkout: {
        position: 'absolute',
        width: '150px',
        margin: '0.5rem',
        left: '40%',
        [sizes.down('sm')]: {
            left: '90px',
        },
        [sizes.down('xs')]: {
            left: '90px',
        }

    }
}));
export default (styles);