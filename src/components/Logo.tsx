import Image from 'next/image';
import logo from '@/assets/logo2.png';

export default function Logo() {
    return (
        <div className="flex items-center md:w-25 md:h-15 w-20 h-13 relative">
            <Image src={logo} alt="YETbet" className="w-30  h-auto rounded absolute top-0.5" />
        </div>
    );
}