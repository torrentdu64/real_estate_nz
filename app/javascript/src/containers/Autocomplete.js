import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Highlight, connectAutoComplete } from 'react-instantsearch-dom';
import AutoSuggest from 'react-autosuggest';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchLocation } from '../actions';


class AutoComplete extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
    onSuggestionSelected: PropTypes.func.isRequired,
    onSuggestionCleared: PropTypes.func.isRequired,
  };

  componentWillReceiveProps = async (nextProps) => {
    if(nextProps !== this.props ){
      console.log('redux' , nextProps.hits)
      this.props.searchLocation(nextProps.hits)
    }
  }

  state = {
    value: this.props.currentRefinement,
  };

  onChange = (_, { newValue }) => {
    if (!newValue) {
      this.props.onSuggestionCleared();
    }

    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value);
  };

  onSuggestionsClearRequested = () => {
    this.props.refine();
  };

  getSuggestionValue(hit) {

    return hit.address;
  }

  renderSuggestion(hit) {
    return <Highlight attribute="address" hit={hit} tagName="mark" />;
  }

  render() {
    const { hits, onSuggestionSelected } = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: 'Search for a House...',
      onChange: this.onChange,
      value,
    };

    return (
      <AutoSuggest
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchLocation }, dispatch);
}

export default connect(null, mapDispatchToProps)( connectAutoComplete( AutoComplete ) );
