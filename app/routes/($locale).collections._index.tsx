import {redirect} from '@remix-run/react';

export function loader() {
  return redirect('/collections/all');
}
