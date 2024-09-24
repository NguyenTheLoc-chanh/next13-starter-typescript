'use client'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';


const ViewDetailBlog = ({ params }: { params: { name: string } }) =>{
    const router = useRouter();
    const handleBtn = function() {
        router.push("/blogs")
    };

    return (
        <div>
            <div className='mb-3'>
                <Button variant='danger' onClick={handleBtn}>back Home</Button>
            </div>
            <Card style={{ width: '100%', textAlign: 'center'}}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default ViewDetailBlog;