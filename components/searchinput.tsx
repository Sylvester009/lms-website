"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

const SearchInput = () => {
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value);

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const currentCategoryId = searchParams.get("categoryId");

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                title: debouncedValue,
                categoryId: currentCategoryId,
            },
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);
    }, [debouncedValue, currentCategoryId, router, pathname])

    return ( 
        <div className="relative">
            <Search 
            className="h-4 w-4 absolute top-3 left-3 text-orange-600"
            />
            <Input 
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="w-full md:w-[300px] pl-9 rounded-full bg-orange-100 focus-visible:ring-orange-200"
            type="text"
            placeholder="Search..."
            />
        </div>
     );
}
 
export default SearchInput;