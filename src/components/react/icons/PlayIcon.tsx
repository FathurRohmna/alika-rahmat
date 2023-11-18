import type { SVGProps } from 'react';

const PlayIcon = (props: SVGProps<SVGSVGElement>) => {
  const { color = 'currentcolor', ...attrs } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...attrs}>
      <rect x="6" y="5" width="4" height="14" rx="1" fill={color} />
      <rect x="14" y="5" width="4" height="14" rx="1" fill={color} />
    </svg>
  )
}

export default PlayIcon