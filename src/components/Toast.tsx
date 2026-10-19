/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <aside
      aria-label="Notification"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#141720] border border-emerald-500/30 text-white text-xs sm:text-sm shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200"
    >
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="font-medium text-slate-200">{message}</span>
    </aside>
  );
};
