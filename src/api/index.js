import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchData = () => axios.get(url);

export const creatPost = (newPost) => axios.post(url, newPost)

export const updatePost = (id,updatePost) => axios.patch(`${url}/${id}`, updatePost)

export const deletePost = (id) => axios.delete(`${url}/${id}`)
