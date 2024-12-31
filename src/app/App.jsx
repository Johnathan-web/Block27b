import TransactionHistory from "../features/transactions/TransactionHistory";
import {Provider} from 'react-redux';
import Transactions from "../features/transactions/Transactions";
import store from './path/to/store';
import "./app.css";

// TODO: Import the Redux store and provide it to this component using <Provider>.
export default function App() {
  return (
    <Provider store={store}> {/* Provide the Redux store */}
    <main>
      <h1>Bank Account</h1>
      <Transactions />
      <TransactionHistory />
    </main>
  </Provider>
  );
}
