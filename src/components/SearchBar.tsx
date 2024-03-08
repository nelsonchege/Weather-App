import { Button } from "./ui/button";
import { Input } from "./ui/input";

type SearchBarProps = {
  className: string;
};

const SearchBar = ({ className }: SearchBarProps) => {
  return (
    <div className={className}>
      <div className="flex w-full  items-center space-x-2">
        <Input type="text" placeholder="search for a city ...." />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
};

export default SearchBar;
