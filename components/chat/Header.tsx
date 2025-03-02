import { MobileMenu } from './MobileMenu';
import { ModelSelect } from './ModelSelect';

export function Header() {
  return (
    <header className="flex items-center p-2 sticky top-0 bg-white z-10">
      <MobileMenu />
      <ModelSelect />
    </header>
  );
}
