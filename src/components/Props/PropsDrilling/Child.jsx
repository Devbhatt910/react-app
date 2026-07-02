import { GrandChild } from './GrandChild';

export function Child({userName}){
  return <GrandChild userName={userName} />;
}