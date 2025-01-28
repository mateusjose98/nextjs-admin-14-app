import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function TopBar() {
  return (
    <nav className=" inset-x-0 top-0 bg-white shadow-sm dark:bg-gray-950/90 pb-0">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-4"></div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
                JM
              </AvatarFallback>
            </Avatar>
            <Link href="/" className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
