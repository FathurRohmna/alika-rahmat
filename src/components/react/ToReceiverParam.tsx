const ToReceiverParam = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const toReceiver = urlParams.get('to');

  return (
    <h1 className="text-2xl mt-3 font-semibold">{toReceiver}</h1>
  )
}

export default ToReceiverParam;