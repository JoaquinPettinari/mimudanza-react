interface FilterCategoriesProps {
  allCategories: string[];
  activeCategories: string[];
  setActiveCategories: (value: React.SetStateAction<string[]>) => void;
}

function FilterCategories({
  allCategories,
  activeCategories,
  setActiveCategories,
}: FilterCategoriesProps) {
  const handleCategoryChange = (category: string) => {
    setActiveCategories((prev) => {
      if (category === "Ver todo") {
        return ["Ver todo"];
      }
      if (prev.includes(category)) {
        const newCategories = prev.filter((cat) => cat !== category);
        return newCategories.length === 0 ? ["Ver todo"] : newCategories;
      } else {
        return prev.filter((cat) => cat !== "Ver todo").concat(category);
      }
    });
  };

  return (
    <header>
      <details>
        <summary className="text-2xl cursor-pointer">Elegir categoría</summary>
        <div className="flex-wrap grid grid-cols-2 md:grid-cols-3 gap-2 p-3">
          {allCategories.map((category, index) => (
            <label
              key={index}
              className="flex items-center text-xl text-gray-500"
            >
              <input
                type="checkbox"
                checked={activeCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              <span
                className={
                  activeCategories.includes(category) ? "font-bold" : ""
                }
              >
                {category}
              </span>
            </label>
          ))}
        </div>
      </details>
    </header>
  );
}

export default FilterCategories;
