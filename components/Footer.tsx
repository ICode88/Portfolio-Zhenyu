import Link from "next/link";
import { Instagram, BookText as TikTok, MessagesSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background/50 border-t border-border/30 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Zhenyu</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Digital Office Management Student & Creative Technologist
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link 
                href="https://instagram.com/michaelisaa_" 
                target="_blank" 
                className="text-muted-foreground hover:text-violet-400 transition-colors hover:scale-110 transform duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
              </Link>
              <Link 
                href="https://tiktok.com/@secretzhen" 
                target="_blank" 
                className="text-muted-foreground hover:text-violet-400 transition-colors hover:scale-110 transform duration-200 group"
                aria-label="TikTok"
              >
                <TikTok className="h-5 w-5 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
              </Link>
              <Link 
                href="https://discord.com/users/zhenyu0836" 
                target="_blank" 
                className="text-muted-foreground hover:text-violet-400 transition-colors hover:scale-110 transform duration-200 group"
                aria-label="Discord"
              >
                <MessagesSquare className="h-5 w-5 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Zhenyu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}