import type { ReactElement } from 'react';

type Props = {
  when: boolean;
  fallback: ReactElement;
  children: ReactElement;
};

export default function Show(props: Props) {
  const { when, fallback, children } = props;

  return when ? children : fallback;
}
