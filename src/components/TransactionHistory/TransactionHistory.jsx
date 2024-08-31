import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import s from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={clsx(s.tranTable)}>
      <thead className={clsx(s.tranThead)}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, id, amount, currency }, index) => (
          <tr
            key={id}
            className={clsx(index % 2 === 0 ? s.colorGray : s.colorDarkGray)}
          >
            <TransactionHistoryItem
              type={type}
              amount={amount}
              currency={currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
