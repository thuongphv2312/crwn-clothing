const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    { id: 3, title: "Sneakers" },
    { id: 4, title: "Womens" },
    { id: 5, title: "Mens" },
  ];
  return (
    <div className="container">
      {categories.map((category) => (
        <div className="category-container">
          <div className="background-image">
            <div className="category-body">
              <h2>{category.title}</h2>
              <div>Shop now</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
