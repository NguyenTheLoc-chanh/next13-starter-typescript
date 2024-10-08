'use client'

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Interface } from 'readline';
import CreateModal from './create.model';
import { useState } from 'react';
import UpdateModal from './update.modal';
import Link from 'next/link';



interface IProps {
  blogs: IBlog[]
}
const AppTable = (props: IProps) => {
  const {blogs} = props;

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);

  console.log("check",props);
    return (
      <>
          <div className="mb-3" style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3>Table Blogs</h3>
            <Button variant='secondary'
              onClick={() => setShowModalCreate(true)}
            >Add</Button>
          </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map(item => {
              return <tr key = {item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link href ={`blogs/${item.id}`} className='btn btn-primary'>View</Link>
                  <Button variant='warning' className='mx-3' 
                  onClick={() => {
                    setBlog(item)
                    setShowModalUpdate(true)
                  }
                  }>Edit</Button>
                  <Button variant='danger'>Delete</Button>
                </td>
              </tr>
            })}
            
            
          </tbody>
        </Table>
        <CreateModal
          showModalCreate = {showModalCreate}
          setShowModalCreate = {setShowModalCreate}
        />
        <UpdateModal
          showModalUpdate = {showModalUpdate}
          setShowModalUpdate={setShowModalUpdate}
          blog={blog}
          setBlog={setBlog}
        />
      </>
    );
}

export default AppTable;