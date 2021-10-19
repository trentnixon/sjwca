

export default function Home() {
  //console.log(articles)
  return (
    <div>
      <h1>SJWCA</h1>
      <h1>New Season Dates</h1>
      <h1>Reg as a team</h1>
      <h1>Reg as a Individual</h1>
      <h1>Contact</h1>
      

    </div>
  )
}


/* {
  articles.map((article,i)=>{
    return(
      <h3>
          {article.title}
      </h3>
    )
  })
} */

/* export const getStaticProps  = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const articles = await res.json()
    return{
      props:{
        articles
      }
    }
}
 */