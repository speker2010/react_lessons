import axios from 'axios';

export function fetchPost(id) {
    let url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    return {
        type: 'FETCH_POST',
        payload: axios.get(url)
    }
}