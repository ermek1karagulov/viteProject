import { BsFillBookmarkHeartFill } from "react-icons/bs";
import styles from "./Header.module.css";
import { useFavorites } from "../../hooks/useFAvorites";

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <header className={styles.header}>
      <BsFillBookmarkHeartFill fontSize={20} />
      <span>{favorites.length}</span>
    </header>
  );
}
