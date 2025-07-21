import type React from 'react';
import styles from './styles.module.css';

type DefaultInputProps = {
  // children: React.ReactNode;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ labelText, ...rest }: DefaultInputProps) {
  const { id } = { ...rest };
  return (
    <>
      <div className="formRow">
        {labelText && <label htmlFor={id}>{labelText}</label>}
        <input className={styles.input} {...rest} />
      </div>
    </>
  );
}
