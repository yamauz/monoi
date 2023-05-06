import { action } from "./action";
import { Button } from "./components/button";
import * as styles from "./styles.css";

export default function Home() {
  return (
    <main className={styles.container}>
      Hello, Worlds!
      <Button>adf</Button>
    </main>
  );
}
