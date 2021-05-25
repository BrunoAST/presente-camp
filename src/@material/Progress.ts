import LinearProgress from '@material-ui/core/LinearProgress';
import {createStyles, withStyles} from '@material-ui/core/styles';

export const CustomLinearProgress = withStyles(() =>
    createStyles({
        root: {
            height: 8,
            borderRadius: 8,
            margin: '1rem 0'
        },
        colorPrimary: {
            backgroundColor: 'var(--gray-1)',
        },
        bar: {
            borderRadius: 8,
            backgroundColor: 'var(--pink)',
        },
    }),
)(LinearProgress);
