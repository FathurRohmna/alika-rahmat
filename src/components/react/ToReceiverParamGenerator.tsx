import { useState } from 'react';

const ToReceiverParamGenerator = ({
  hostUrl,
}: {
  hostUrl: string;
}) => {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);
  const params = new URLSearchParams({
    to: value,
  });
  const invitationCode = `${hostUrl}?${params}`

  const onSalin = () => {
    setCopied(true);
    navigator.clipboard.writeText(invitationCode);

    setTimeout(() => {
      setCopied(false);
    }, 2000)
  }

  return (
    <div className='h-full mt-24 text-center gap-4'>
      <h1 className='font-bold text-3xl uppercase'>Invitation Link Generator</h1>
      <div className='flex flex-col justify-center md:max-w-2xl mx-auto mt-12 space-y-4'>
        <input className='border rounded px-3 py-2 text-xl' placeholder='To' onChange={(e) => setValue(e.target.value)} />
        <button className='bg-neutral-700 text-white rounded block uppercase w-full mx-auto font-bold border px-6 py-2 text-xl' onClick={onSalin}>{copied? 'Copied!' : 'Salin'}</button>
      </div>
    </div>
  )
}

export default ToReceiverParamGenerator;