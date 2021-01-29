export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';
export const FETCH_HOUSE = 'FETCH_HOUSE';
export const SELECTED_HOUSE = 'SELECTED_HOUSE';

export const ODD_INDEX = 'ODD_INDEX';
export const EVEN_INDEX = 'EVEN_INDEX';

export const STORE_INDEX = 'STORE_INDEX';


import flats from '../data/flats';
//import House from '../model/house';


export function createPost(body, callback) {
  const request = fetch("http://reduxblog.herokuapp.com/api/posts?key=WAGON-BLOG", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: POST_CREATED,
    payload: request
  };
}

export function fetchPost(id) {
  const promise = fetch(`http://reduxblog.herokuapp.com/api/posts/${id}?key=WAGON-BLOG`)
    .then(response => response.json());

  return {
    type: FETCH_POST,
    payload: promise
  }
}

export function fetchPosts() {
  // AJAX request
  const promise = fetch("http://reduxblog.herokuapp.com/api/posts?key=WAGON-BLOG")
    .then(response => response.json());

  return {
    type: FETCH_POSTS,
    payload: promise
  }
}

export function fetchHouses(){
  // give all flats to the payload
  const promise = flats;
  return {
    type: FETCH_HOUSE,
    payload: promise
  }
}

export function selectHouse(house){

  const promise = house

  return {
    type: SELECTED_HOUSE,
    payload: promise
  }
}

export function pushOddIndex(oddIndex){
  const promise = oddIndex
  return {
    type: ODD_INDEX,
    payload: promise
  }
}

export function pushEvenIndex(evenIndex){
  const promise = evenIndex
  return {
    type: EVEN_INDEX,
    payload: promise
  }
}

export function pushIndex(index) {
  const promise = index
  return {
    type: STORE_INDEX,
    payload: promise
  }
}

