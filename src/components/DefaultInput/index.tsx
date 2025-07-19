import type React from 'react';
import styles from './styles.module.css';

type DefaultInputProps = {
  children: React.ReactNode;
} & React.ComponentProps<'input'>;

export function DefaultInput({ children, id, type, name }: DefaultInputProps) {
  return (
    <>
      <div className="formRow">
        <label htmlFor={id}>{children}</label>
        <input type={type} name={name} id={id} />
      </div>
    </>
  );
}
