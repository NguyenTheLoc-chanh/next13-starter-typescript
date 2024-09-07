'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'

const AppHeader = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand>
                <Link href={"/"} className='navbar-brand'>Nguyễn Thế Lộc</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link href={"/Youtube"} className='nav-link' /*className={y['red']}*/>
                    Youtube
                </Link>
                <Link href={"/Facebook"} className='nav-link'>
                    Facebook
                </Link>
                <Link href={"/Tiktok"} className='nav-link'>
                    Tiktok
                </Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default AppHeader;