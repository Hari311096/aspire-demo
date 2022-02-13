import insight from '../../assets/images/insight.png';
import transfer from '../../assets/images/transfer.png';
import freeze from '../../assets/images/freeze.png';
import newCard from '../../assets/images/newCard.png';
import deactivate from '../../assets/images/insight.png';


const listArray = [
  { id: 1, title: 'Top-up account', subTitle: 'Deposit money to your account to use with card', showSwitch: false, image: insight  },
  { id: 2, title: 'Weekly spending limit', subTitle: 'You haven’t set any spending limit on card', showSwitch: true, image: transfer },
  { id: 3, title: 'Freeze card', subTitle: 'Your debit card is currently active', showSwitch: true, image: freeze },
  { id: 4, title: 'Get a new card', subTitle: 'This deactivate your current debit card', showSwitch: false, image: newCard },
  { id: 5, title: 'Deactivated cards', subTitle: 'Your previously deactivated cards', showSwitch: false, image: deactivate },
];

export default listArray;