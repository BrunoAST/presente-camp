import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

export const DefaultButton = withStyles(() => ({
    root: {
        color: '#EB5C2C',
        width: '100%',
        textTransform: 'none',
        fontSize: '16px',
    },
}))(Button);

export const ContainedButton = withStyles(() => ({
    root: {
        color: '#FFF',
        backgroundColor: '#89C8A5',
        borderRadius: '8px',
        width: '100%',
        textTransform: 'none',
        fontSize: '16px'
    },
}))(Button);
