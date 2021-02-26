import algoliasearch from 'algoliasearch/lite';
import React, { Component, Fragment } from 'react';
import { InstantSearch, ClearRefinements } from 'react-instantsearch-dom';
import {
  GoogleMapsLoader,
  GeoSearch,
  Marker,
  Control,
} from 'react-instantsearch-dom-maps';
import Places from './places/widget';


const searchClient = algoliasearch(
  '5UC3ZRD878',
  'fe060219aefda23fc5f2e31dfba64164'
);

class GeoSearchMap extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>React InstantSearch Places</h1>
        <InstantSearch indexName="House" searchClient={searchClient}>
          <div className="search-panel">
            <div className="search-panel__filters">
              <ClearRefinements />
            </div>

            <div className="search-panel__results">
              <Places
                defaultRefinement={{
                  lat: 37.7793,
                  lng: -122.419,
                }}
              />

              <div style={{ height: 500 }}>
                <GoogleMapsLoader apiKey="AIzaSyBawL8VbstJDdU5397SUX7pEt9DslAwWgQ">
                  {google => (
                    <GeoSearch google={google}>
                      {({ hits }) => (
                        <Fragment>
                          <Control />
                          {hits.map(hit => (
                            <Marker key={hit.objectID} hit={hit} />
                          ))}
                        </Fragment>
                      )}
                    </GeoSearch>
                  )}
                </GoogleMapsLoader>
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}



export default GeoSearchMap;
