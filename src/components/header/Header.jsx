import { BsFillBookmarkHeartFill } from "react-icons/bs";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <BsFillBookmarkHeartFill />
    </header>
  );
}
