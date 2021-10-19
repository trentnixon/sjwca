import { API } from "../config/index"
/*
git add .
git commit -am " Int Strapi Test"
git push heroku main:main

*/
export default function Home({mission}) {
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

/* 
<h2>{mission.Title}</h2>
<p>{mission.Copy}</p>
export const getStaticProps = async (context) => {


  const res = await fetch(`${API}/misson`)

  const mission = await res.json()

  console.log(mission)
  return {
    props: {
      mission,
    },
  }
}
 */

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