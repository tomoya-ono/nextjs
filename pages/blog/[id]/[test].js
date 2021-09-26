import { useRouter } from 'next/router'


export default function Test() {
    const router = useRouter()
    const { id, test } = router.query
    return (
            <>
            <p>{id}</p>
            <p>{test}</p>
            </>
            
    )
}
