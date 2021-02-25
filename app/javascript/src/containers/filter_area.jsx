import React, { Component } from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  Configure,
  Hits,
  Highlight,
  connectSearchBox,
} from 'react-instantsearch-dom';
import Autocomplete from './Autocomplete';



const VirtalSearchBox = connectSearchBox(() => null);

const searchClient = algoliasearch(
  '5UC3ZRD878', 'fe060219aefda23fc5f2e31dfba64164'
);

class FilterArea extends Component {
  state = {
    query: '',
  };

  onSuggestionSelected = (_, { suggestion }) => {
    console.log('onSuggestionSelected', suggestion);
    this.setState({
      query: suggestion.address,
    });
  };

  onSuggestionCleared = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="container">
          <InstantSearch indexName="House" searchClient={searchClient}>
          <Configure hitsPerPage={5} />
          <Autocomplete
            onSuggestionSelected={this.onSuggestionSelected}
            onSuggestionCleared={this.onSuggestionCleared}
          />
        </InstantSearch>

        {/*<InstantSearch indexName="House" searchClient={searchClient}>
          <VirtalSearchBox defaultRefinement={query} />
          <Hits hitComponent={Hit} />
        </InstantSearch>*/}
      </div>
    );
  }
}

function Hit(props) {

  return (
    <div>
      <Highlight attribute="address" hit={props.hit} />
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};



export default FilterArea;


