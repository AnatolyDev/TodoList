import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {setVisibilityFilter} from "../../Actions";
import {VisibilityFilters} from '../../Constants';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class SimpleTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
        switch (value) {
            case (0) : { this.props.showAll(); break }
            case (1) : { this.props.showActive(); break }
            case (2) : { this.props.showCompleted() ; break}
            default  : {}
        }
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label='Все' />
                        <Tab label='Активные' />
                        <Tab label='Выполненные' />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        showAll: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL)),
        showActive: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)),
        showCompleted: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SimpleTabs));