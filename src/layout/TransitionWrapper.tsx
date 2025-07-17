import { AnimatePresence, motion } from 'framer-motion';
import { useRouteInfo } from '@/shared/hooks/useRouteInfo';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const { requiresTransition } = useRouteInfo();

  if (!requiresTransition) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={window.location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}