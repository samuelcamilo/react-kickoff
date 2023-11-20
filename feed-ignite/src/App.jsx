import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Diego Fernandes"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
    </>
  )
}
