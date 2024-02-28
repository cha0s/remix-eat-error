import {Form} from '@remix-run/react';

export default function Index() {
  return (
    <Form action="/test">
      <input type="submit" />
    </Form>
  );
}
