import React, { useState } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPosts } from '../../actions/posts'

const Form = () => {
    const classes = useStyles();
    const [postData, setpostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPosts(postData))
    }
    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography  variant='h6' >Creating a Memory</Typography>
                <TextField name="creater" variant='outlined' label='Creater' fullWidth value={postData.creator} onChange={(e) => setpostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setpostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => setpostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setpostData({ ...postData, tags: e.target.value })} />
                <div className={classes.fileInput}> <FileBase type="file" multiple={false} onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })} /> </div>
                <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" fullWidth type="submit">Submit</Button>
                <Button color="secondary" variant="contained" size="small" fullWidth onChange={clear}>Clear</Button>
            </form>
        </Paper>
    )

}

export default Form;