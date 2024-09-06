'use client'
import { useRouter } from 'next/navigation';


const Facebook = () => {
    const router = useRouter();
    const handleBtn = function() {
        router.push("/")
    };

    return (
        <div>
            Facebook
            <div>
                <button onClick={handleBtn}>back Home</button>
            </div>
        </div>
    )
}

export default Facebook;