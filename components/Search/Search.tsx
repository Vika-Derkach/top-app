import cn from "classnames";
import { useRouter } from "next/router";
import React, { KeyboardEvent, useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import GlassIcon from "./glass.svg";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      goToSearch();
    }
  };

  return (
    <form className={cn(styles.search, className)} {...props} role="search">
      <Input
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
        aria-label="Search on site"
      >
        <GlassIcon />
      </Button>
    </form>
  );
};
