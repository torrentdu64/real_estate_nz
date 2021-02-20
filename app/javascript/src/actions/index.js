export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';
export const FETCH_HOUSE = 'FETCH_HOUSE';
export const SELECTED_HOUSE = 'SELECTED_HOUSE';
export const PAGINATE_HOUSE = 'PAGINATE_HOUSE';


const BASE_URL = '/api/v1';
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

export function paginateHouses(page){
  // give all flats to the payload
  let url = `${BASE_URL}/houses?page=${page}`;
  let promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());
  console.log('paginateHouses', promise)
  debugger

  return {
    type: PAGINATE_HOUSE,
    payload: promise
  }
}

export function fetchHouses(){
  // give all flats to the payload
  const url = `${BASE_URL}/houses`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());
  console.log('fetchHouses', promise)


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



