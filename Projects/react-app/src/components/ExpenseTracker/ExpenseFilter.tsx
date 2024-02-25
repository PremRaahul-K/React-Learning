import categories from "./Categories";
interface Props {
  selectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ selectedCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => selectedCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
