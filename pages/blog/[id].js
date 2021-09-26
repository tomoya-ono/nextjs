import { useRouter } from 'next/router'

export default function Id() {
    const router = useRouter()
    const { id, foo } = router.query
    return (
        <>
        <p>{id}</p>
        <p>{foo}</p>
        </>  
    )
}

