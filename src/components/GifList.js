function GifList({ theGifs }) {
    // complete - Take in props
    // done - Render a top level <ul>
    // done - Render an <li> for each Gif
    return (
      <ul>
        {theGifs.map(({ url }, index) => (
          <li key={index}>
            <img src={url} alt='gif'></img>
          </li>
        ))}
      </ul>
    );
  }
  export default GifList;