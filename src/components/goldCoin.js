import React from 'react';
import Avatar from '@mui/material/Avatar';

export default function GoldCoin({ coins }) {

  return (<div >
    <Avatar >
      coins: {coins}
    </Avatar>
  </div>
  );
}