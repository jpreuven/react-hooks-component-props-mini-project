function Article({ date = "January 1, 1970", title, preview, minutes }) {
  const lessThanThirty = Math.round(minutes / 5);
  const moreThanThirty = Math.round(minutes / 10);
  const coffee = "☕️";
  const bentoBox = "🍱";
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}{" "}
        {minutes < 30
          ? `${coffee.repeat(lessThanThirty)}`
          : `${bentoBox.repeat(moreThanThirty)}`}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
