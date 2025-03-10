'use client';

import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useSheetStore } from '@/app/store/sheet';
import { DialogTitle } from '@radix-ui/react-dialog';

export function MobileMenu({ children }: { children: React.ReactNode }) {
  const open = useSheetStore((state) => state.open);
  const setOpen = useSheetStore((state) => state.setOpen);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <DialogTitle className="sr-only"></DialogTitle>
          {children}
        </SheetContent>
      </Sheet>
    </div>
  );
}
