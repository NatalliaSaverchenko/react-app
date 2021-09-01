import { useState } from 'react'
import MyInput from './IU/input/MyInput'
import MyButton from './IU/button/MyButton'
const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = { ...post, id: Date.now() }
    create(newPost)
    setPost({ title: '', body: '' })
  }
  return (
    <div>
      <form>
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
          value={post.title}
        />
        <MyInput
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
          value={post.body}
        />
        <MyButton type="submit" onClick={addNewPost}>
          Создать пост
        </MyButton>
      </form>
    </div>
  )
}
export default PostForm
