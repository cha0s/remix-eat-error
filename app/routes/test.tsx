import {useOtherThing} from './hooks';

export default function Test() {
  const whatever = useOtherThing();
  return (
    <div className="test">Hello!</div>
  );
}
