import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';





//import algoliasearch from 'algoliasearch';

// const client = algoliasearch(  <%= ENV['ApplicationID'] %>, <%= ENV['AdminAPIKey'] %> );
// const index = client.initIndex('House');
const client = algoliasearch('5UC3ZRD878', 'fe060219aefda23fc5f2e31dfba64164');
const index = client.initIndex('House');





const submitBtn = document.getElementById('submit-btn')
const hitsArea = document.getElementById('hits-area')


submitBtn.addEventListener('click', (e) => {
  e.preventDefault()

  const inputSearch = document.getElementById('input-search').value

  index.search(`${inputSearch}`, {
      attributesToRetrieve: ['name', 'address'],
      hitsPerPage: 5,
    }).then(({ hits }) => {
    console.log(hits);
    renderHitsHtml(hits)
  });
})




function renderHitsHtml(hits){


  hits.map( hit => {
    const div = document.createElement('div')
    div.innerHTML = hit.name
    hitsArea.prepend(div)
  })
}



// import algoliasearch from 'algoliasearch/lite';
// import instantsearch from 'instantsearch.js';
// import { searchBox, hits } from 'instantsearch.js/es/widgets';

// const searchClient = algoliasearch('5UC3ZRD878', 'fe060219aefda23fc5f2e31dfba64164');







//  🚧 TEST BELOW 🚧
// const searchClient = algoliasearch(
//   'B1G2GM9NG0',
//   'aadef574be1f9252bb48d4ea09b5cfe5'
// );

// const autocomplete = instantsearch.connectors.connectAutocomplete(
//   ({ indices, refine, widgetParams }, isFirstRendering) => {
//     const { container, onSelectChange } = widgetParams;

//     if (isFirstRendering) {
//       container.html('<select id="ais-autocomplete"></select>');

//       container.find('select').selectize({
//         options: [],
//         valueField: 'name',
//         labelField: 'name',
//         highlight: false,
//         onType: refine,
//         onBlur() {
//           refine(this.getValue());
//         },
//         score() {
//           return function() {
//             return 1;
//           };
//         },
//         onChange(value) {
//           onSelectChange(value);
//           refine(value);
//         },
//       });

//       return;
//     }

//     const [select] = container.find('select');

//     indices.forEach(index => {
//       select.selectize.clearOptions();
//       index.results.hits.forEach(h => select.selectize.addOption(h));
//       select.selectize.refreshOptions(select.selectize.isOpen);
//     });
//   }
// );

// const search = instantsearch({
//   indexName: 'demo_ecommerce',
//   searchClient,
// });

// search.addWidgets([
//   instantsearch.widgets.configure({
//     hitsPerPage: 10,
//   }),
//   instantsearch.widgets.hits({
//     container: '#hits',
//     templates: {
//       item: `
//         <div>
//           <header class="hit-name">
//             {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
//           </header>
//           <p class="hit-description">
//             {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}
//           </p>
//         </div>
//       `,
//     },
//   }),
// ]);

// const suggestions = instantsearch({
//   indexName: 'demo_ecommerce',
//   searchClient,
// });

// suggestions.addWidgets([
//   instantsearch.widgets.configure({
//     hitsPerPage: 5,
//   }),
//   autocomplete({
//     container: $('#autocomplete'),
//     onSelectChange(value) {
//       search.helper.setQuery(value).search();
//     },
//   }),
// ]);

// suggestions.start();
// search.start();
