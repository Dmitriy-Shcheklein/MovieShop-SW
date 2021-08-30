import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withMovieShopService } from '../Hoc';
import Spinner from '../Spinner';
import { moviesFetching } from '../../actions/Actions';
import ErrorIndicator from '../ErrorIndicator';
import MovieList from './MovieList';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25vh'
  }
})

class MovieListContainer extends Component {

  componentDidMount() {
    this.props.moviesFetching();
  }

  render() {

    const { loading, error } = this.props;

    const { classes } = this.props;

    if (loading) {
      return (
        <div className={classes.root}>
          <Spinner />
        </div>
      )
    }

    if (error) {
      return <ErrorIndicator />
    }
    return <MovieList />
  }
}

const mapStateToProps = ({ loading, error }) => {
  return {
    loading,
    error,
  }
}

const mapDispatchToProps = (dispatch, { movieShopService }) => {
  return {
    moviesFetching: moviesFetching(movieShopService, dispatch),
  }
}

export default withStyles(styles)(withMovieShopService()(connect(
  mapStateToProps, mapDispatchToProps)(MovieListContainer)
));