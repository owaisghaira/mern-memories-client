import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchData = () => axios.get(url);

export const creatPost = (newPost) => axios.post(url, newPost)