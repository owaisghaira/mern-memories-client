import * as api from '../api'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchData();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
export const createPosts = (post) => async (dispatch) => {
    try {
        const { data } = await api.creatPost(post);

        dispatch({ type: 'CREATE', payload: data })
    
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePosts = (id,post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id,post);

        dispatch({ type: 'UPDATE', payload: data })
    
    } catch (error) {
        console.log(error)
    }
}
export const deletePosts = (id) => async (dispatch) => {
    try {
       await api.deletePost(id);

        dispatch({ type: 'DELETE', payload: id })
    
    } catch (error) {
        console.log(error)
    }
}