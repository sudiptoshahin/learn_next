import Link from "next/link";


export default function Navbar() {

    return (
        <div style={{
            backgroundColor: "#4caf50", height: '100px',
            width: '100%', display: 'flex', flexDirection: 'row', justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <nav>
                <Link href={'/'} legacyBehavior>
                    <a href="#">Home</a>
                </Link>
                <Link href={'/about'} legacyBehavior>
                    <a target={'_blank'}>About us</a>
                </Link>
                <Link href={'/contact'} legacyBehavior>
                    <a href="#">Contact</a>
                </Link>
            </nav>
        </div>
    );
}