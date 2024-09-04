import { useEffect, useState } from "react";
const CoolBackground = () => {
  const [spanCount, setSpanCount] = useState(0);

  useEffect(() => {
    const updateSpanCount = () => {
      const spanSize =
        window.innerWidth <= 600 ? 16 : window.innerWidth <= 900 ? 10 : 6.25;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const spanWidth = viewportWidth * (spanSize / 100);
      const spanHeight = viewportHeight * (spanSize / 100);

      const spansPerRow = Math.ceil(viewportWidth / spanWidth);
      const rows = Math.ceil(viewportHeight / spanHeight);

      setSpanCount(spansPerRow * rows + 30);
    };

    updateSpanCount();
    window.addEventListener("resize", updateSpanCount);

    return () => window.removeEventListener("resize", updateSpanCount);
  }, []);
  console.log("spaceCount", spanCount);
  return (
    <section>
      {Array.from({ length: spanCount }, (_, i) => (
        <span key={i}></span>
      ))}
    </section>
  );
};

export default CoolBackground;
