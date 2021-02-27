import React, { Component } from 'react'
import algoliasearch from 'algoliasearch';
import { InstantSearch, Configure, SearchBox } from 'react-instantsearch-dom'
import { GoogleMapsLoader } from 'react-instantsearch-dom-maps'
import Stats from './Stats'
import Content from './Content'
import Geo from './Geo'
import './Main.css'




 const searchClient = algoliasearch(
  '5UC3ZRD878',
  'fe060219aefda23fc5f2e31dfba64164'
);


class Main extends Component {


  render() {
    return (
      <InstantSearch
        searchClient={searchClient}
        indexName="House"
      >
        <Configure
          hitsPerPage={6}
          getRankingInfo
          aroundLatLngViaIP
          typoTolerance="min"
        />
        <main className="search-container">
          <div className="right-panel">
            <div id="map">
              {/* Uncomment the following widget to add a map */}
             <div style={{ height: '100%' }}>
                <GoogleMapsLoader apiKey="AIzaSyBzNGNF-pcCSHvOldGNWsSayZmGFzq1i-8">
                  {google => <Geo google={google} />}
                </GoogleMapsLoader>
              </div>
            </div>
            <div id="searchbox">
              {/* Uncomment the following widget to add a search bar */}
               <SearchBox
                translations={{
                  placeholder: 'Search airports by name, city, airport code'
                }}
              />
            </div>
            <div id="stats">
              {/* Uncomment the following widget to add search stats */}
             <Stats />
            </div>
          </div>
          <div className="left-panel">
            <div id="hits">
              {/* Uncomment the following widget to add hits list */}
               <Content />
            </div>
          </div>
        </main>
      </InstantSearch>
    )
  }
}

export default Main
