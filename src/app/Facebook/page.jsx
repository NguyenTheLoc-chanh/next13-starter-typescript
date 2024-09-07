'use client'
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

const Facebook = () => {
    const router = useRouter();
    const handleBtn = function() {
        router.push("/")
    };

    return (
        <div>
            Facebook
            <div>
                <Button variant='danger'>React Bootstrap</Button>
                <button onClick={handleBtn}>back Home</button>
            </div>
        </div>
    )
}

export default Facebook;