import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react'

const comments = [
  1,
  2,
  3,
  4,
  5
]

export function Post({ author, contents, publishedAt }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  function handleCreateComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={ publishedDateFormatted } dateTime={ publishedAt.toISOString() }>
          { publishedDateRelativeToNow }
        </time>
      </header>

      <div className={styles.content}>
        {contents.map(item => {
          if (item.type === 'paragraph') {
            return <p>{ item.content }</p>
          } else {
            return <p><a href="">{ item.content }</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment} />
        })}
      </div>
    </article>
  )
}