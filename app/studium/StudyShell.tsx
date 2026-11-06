import type { ReactNode } from "react";

/** Přechodová komponenta: navigace a patička jsou nyní v app/layout.tsx.
 *  Díky tomu nemusíme měnit existující stránky Studia ani detailu kurzu.
 */
export default function StudyShell({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
