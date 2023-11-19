import { useState } from 'react';
import CopyIcon from './icons/CopyIcon';

const BankAccountButton = ({ accountNumber }: { accountNumber: number | string }) => {
  const [copy, setCopy] = useState(false);

  const onCopyAccount = () => {
    navigator.clipboard.writeText(accountNumber.toString());
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 3000)
  }

  return (
    <button type='button' onClick={() => onCopyAccount()} className="z-50 border rounded w-full px-2 py-1 font-bold text-lg text-neutral-700 tracking-wider flex justify-between items-center">
      <code>{copy ? 'COPIED !': accountNumber}</code> <CopyIcon />
    </button>
  )
}

export default BankAccountButton;