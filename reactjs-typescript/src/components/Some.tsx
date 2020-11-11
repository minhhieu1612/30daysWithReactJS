import React from 'react';
const name: string = 'hieu';

export default function Some() {
  return (
    <div className='about' key='haha'>
          <p>hello every one</p>
      <details>Greeting from {name}</details>
    </div>
  );
}
