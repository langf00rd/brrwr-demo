import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HEADER_MENU_OPTS, HEADER_SELECT_OPTS } from "@/lib/content";
import { Box, ExternalLink, MenuIcon, Star, WindIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header(props: {
  onBorrowCategoryChange: (category: string) => void;
  borrowCategory: string;
}) {
  return (
    <header className="h-[65px]">
      <div className="mt-5 h-full px-5 w-full gap-10 max-w-[900px] mx-auto flex items-center justify-between">
        <div className="bg-gradient-to-tl from-orange-500 to bg-orange-300 text-white px-5 flex items-center justify-center rounded-md h-[50px] md:h-[65px]">
          <p className="font-bold md:text-2xl">BRRWR</p>
        </div>
        <div className="bg-[#ffffffe0] md:flex justify-between px-5 items-center gap-5 rounded-md w-full h-full hidden">
          <Select
            onValueChange={props.onBorrowCategoryChange}
            value={props.borrowCategory}
          >
            <SelectTrigger className="items-start w-[200px] font-bold text-black">
              <SelectValue placeholder="Borrow" />
            </SelectTrigger>
            <SelectContent>
              {HEADER_SELECT_OPTS.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-white">
              <Star className="text-pink-700" />
              132
            </Button>
            <Button variant="outline" className="bg-white">
              <Box className="text-pink-700" /> $19.32
            </Button>
            <Button variant="outline" className="bg-white">
              <WindIcon className="text-pink-700" />
              My points
            </Button>
          </div>
        </div>
        <div className="bg-[#ffffffe0] flex items-center gap-5 px-5 h-full rounded-md">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="bg-white" size="icon">
                <MenuIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-background p-1">
              <ul>
                {HEADER_MENU_OPTS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href="#"
                      target="_blank"
                      className="bg-white hover:bg-background transition-colors p-5 mb-1 rounded-sm flex items-center justify-between w-full"
                    >
                      <p className="text-sm flex items-center gap-2">
                        {item.icon}
                        {item.label}
                      </p>
                      <ExternalLink size={14} className="text-neutral-500" />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="p-5 text-center text-[12px] text-neutral-500">
                Built from 0dd2a57 at 27/05/2025, 09:38:10
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
