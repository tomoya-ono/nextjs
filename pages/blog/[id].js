import { useRouter } from 'next/router'


export const getStaticPaths = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    const allPaths = users.map(user => {
        return {
           params: {id: user.id.toString()}
        }
    })

    const paths = allPaths.slice(0,5)

    return {
        paths,
        fallback: true
    }
}


export const getStaticProps = async function(context) {
      const id = context.params.id
      const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
      const data = await res.json()

      return {
          props: { data },
          revalidate: 5
      }
}

export default function Id({ data }) {
    const router = useRouter()
    if(router.isFallback){
        return <div>loading</div>
    }
    return (
        <>
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>{data.email}</p>
        </>  
    )
}

// getStaticPaths、getStaticProrpsはビルド時に一回だけ
//全てのidでgetStaticProps, Idが実行される

