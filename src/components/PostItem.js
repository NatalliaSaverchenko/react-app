import MyButton from './IU/button/MyButton'
const PostItem = ({ post, remove }) => {
  const deletePost = () => {
    remove(post)
  }
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={deletePost}>Удалить</MyButton>
      </div>
    </div>
  )
}
export default PostItem
