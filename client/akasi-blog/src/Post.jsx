const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2021/11/51911636017350_.pic_hd.jpg?w=1390&crop=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Abu Dhabi pours $738.5M into China’s Tesla challenger Nio</h2>
        <p className="info">
          <a href="" className="author">
            Peter Akasi
          </a>
          <time>2023-06-20 13:20</time>
        </p>
        <p className="summary">
          China’s electric vehicle companies are pouring into the Middle East
          where both investors and consumers have a growing appetite for the
          country’s Tesla challengers.
        </p>
      </div>
    </div>
  );
}
export default Post