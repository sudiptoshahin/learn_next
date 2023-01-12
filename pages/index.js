import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Hello World, NextJS</h1>

            <Link href='/about' legacyBehavior>
                <a title='About nextJS'>About nextJS projects</a>
            </Link>
        </div>
    );
}