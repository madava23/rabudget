// rrd imports
import { Form, Link } from "react-router-dom";

// library imports
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/outline";

// helper functions
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div
      className="budget"
      style={{
        "--accent": color,
      }}
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p className="budget-amount">Tetibola : {formatCurrency(amount)}</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>Vola lany : {formatCurrency(spent)}</small>
        <small>Vola sisa : {formatCurrency(amount - spent)}</small>
      </div>
      {showDelete ? (
        <div className="flex-sm">
          <Form
            method="post"
            action="delete"
            onSubmit={(event) => {
              if (!confirm("Tena te-hamafa ity tetibola ity tokoa ve ianao?")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn">
              <span>Fafao ny tetibola</span>
              <TrashIcon width={20} />
            </button>
          </Form>
        </div>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn">
            <span>Jereo ny antsipiriany</span>
            <BanknotesIcon width={20} />
          </Link>
        </div>
      )}
    </div>
  );
};
export default BudgetItem;
