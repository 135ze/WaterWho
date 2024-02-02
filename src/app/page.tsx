import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/react";
import styles from "./index.module.css";

export default async function Home() {
  noStore();

  return (
    <div></div>
  );
}
