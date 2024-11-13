import { useState } from "react";

interface CalculatorState {
  total: number;
  previousTotal: number;
}

export default function Calculator() {
  const [calcState, setCalcState] = useState<CalculatorState>({ total: 0, previousTotal: 0 });
  const [value, setValue] = useState<number | "">(0);  // Allow empty string for controlled input

  const handleAddClick = () => {
    setCalcState({ total: calcState.total + (value || 0), previousTotal: calcState.total });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue === "" ? "" : Number(inputValue));  // Handle empty input gracefully
  };

  return (
    <div className="calculator">
      <p>
        <input
          type="text"
          id="value"
          name="value"
          onChange={handleChange}
          value={value}
        />
      </p>
      <button className="btn btn-primary" type="button" onClick={handleAddClick}> Add </button>
      <p className="card-text">Total: {calcState.total}</p>
      <p className="card-text">Previous Total: {calcState.previousTotal}</p>
    </div>
  );
}