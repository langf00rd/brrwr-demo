import { TOKENS } from "@/lib/content";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function TokenConverter(props: { label: string }) {
  return (
    <div className="space-y-1">
      <h4 className="font-medium md:text-[17px] text-neutral-500">
        {props.label}
      </h4>
      <div className="flex bg-background items-center border p-2 rounded-md">
        <Select>
          <SelectTrigger className="items-start text-xl pb-10 pt-4 w-[200px] bg-white font-bold text-black">
            <SelectValue placeholder="Token" />
          </SelectTrigger>
          <SelectContent>
            {TOKENS.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          className="placeholder:text-[26px] h-full border-none shadow-none"
          placeholder="$100"
          style={{
            fontSize: "26px",
          }}
        />
      </div>
    </div>
  );
}
