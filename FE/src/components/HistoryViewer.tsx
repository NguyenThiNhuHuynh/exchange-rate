import React from 'react';
import HistoryItem from './HistoryItem';
import { List } from '@mui/material';

interface HistoryViewerProps {
  history: {
    fromCurrency: string;
    toCurrency: string;
    rate: number;
    createdBy: string;
  }[];
}

const HistoryViewer: React.FC<HistoryViewerProps> = ({ history }) => {
  return (
    <div className="history-viewer">
      <h3>Exchange Rate History</h3>
      <List>
        {history.map((item, index) => (
          <HistoryItem key={index} item={item} />
        ))}
      </List>
    </div>
  );
};

export default HistoryViewer;
