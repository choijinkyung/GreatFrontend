import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";
export default function App() {
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const body = {
      action: "like",
    };
    try {
     await fetch(
        `https://questions.greatfrontend.com/api/questions/like-button`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      ).then((res) => {
        setLiked(true);
      });
    } catch (error) {
      setLiked(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button
        className={!liked ? "default-button" : "liked-button"}
        onClick={() => handleClick()}
      >
        {!loading ? <HeartIcon /> : <SpinnerIcon />}Like
      </button>
    </div>
  );
}
/**
 * default, hover, liked, loading
 * click - request api, loading -> 50%
 * success - change to liked
 * fail - default, hovered
 * errormessage below the button
 *
 */
