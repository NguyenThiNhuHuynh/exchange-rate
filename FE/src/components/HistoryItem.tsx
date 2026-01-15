import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

interface HistoryItemProps {
  item: {
    fromCurrency: string;
    toCurrency: string;
    rate: number;
    createdBy: string;
  };
}

const HistoryItem: React.FC<HistoryItemProps> = ({ item }) => {
  return (
    <ListItem>
      <ListItemText
        primary={`1 ${item.fromCurrency} = ${item.rate} ${item.toCurrency}`}
        secondary={`Saved at: ${item.createdBy}`}
      />
    </ListItem>
  );
};

export default HistoryItem;
