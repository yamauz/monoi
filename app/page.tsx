import { Suspense } from "react";
import { Button } from "./components/button";
import List from "./components/list";
import * as styles from "./styles.css";
export const revalidate = 60;

export default function Home() {
  return (
    <main className={styles.container}>
      Hello, Worlds!
      <Button>adf</Button>
      <Suspense fallback={<div>loading</div>}>
        {/* @ts-expect-error Server Component */}
        <List />
      </Suspense>
    </main>
  );
}
