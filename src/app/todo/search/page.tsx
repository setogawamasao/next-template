import type { Metadata } from "next";
import SearchPage from "./search";

export const metadata: Metadata = {
  title: "Search Todo",
};

export default function SearchMetaData() {
  return <SearchPage />;
}
