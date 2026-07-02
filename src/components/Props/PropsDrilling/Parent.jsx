import { Child } from './Child';

export function Parent(){
  const userName = 'devbhatt';
  return <Child userName={userName} />;
}