"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CART_STORAGE_KEY,
  MAX_QUANTITY,
  itemCount,
  lineKey,
  subtotalCents,
  type CartLine,
} from "@/lib/cart";

/**
 * The one client island for cart state: React context + localStorage so the
 * cart survives reloads. Everything else in the app is a Server Component.
 */

type CartItem = Omit<CartLine, "quantity">;

type CartContextValue = {
  lines: CartLine[];
  addItem: (item: CartItem, quantity?: number) => void;
  setQuantity: (lineKey: string, quantity: number) => void;
  removeLine: (lineKey: string) => void;
  clear: () => void;
  itemCount: number;
  subtotalCents: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

function readStoredLines(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line): line is CartLine =>
        typeof line?.slug === "string" &&
        typeof line?.name === "string" &&
        typeof line?.priceAUD === "number" &&
        typeof line?.image === "string" &&
        typeof line?.quantity === "number" &&
        (line?.size === undefined || typeof line?.size === "string"),
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load after mount (SSR always renders an empty cart), then keep in sync.
  useEffect(() => {
    setLines(readStoredLines());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
  }, [lines, loaded]);

  const addItem = useCallback((item: CartItem, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find((line) => lineKey(line) === lineKey({ slug: item.slug, size: item.size }));
      if (existing) {
        return prev.map((line) =>
          lineKey(line) === lineKey({ slug: item.slug, size: item.size })
            ? {
                ...line,
                quantity: Math.min(MAX_QUANTITY, line.quantity + quantity),
              }
            : line,
        );
      }
      return [
        ...prev,
        { ...item, quantity: Math.min(MAX_QUANTITY, Math.max(1, quantity)) },
      ];
    });
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    const next = Math.min(MAX_QUANTITY, Math.max(1, Math.round(quantity)));
    setLines((prev) =>
      prev.map((line) => (lineKey(line) === key ? { ...line, quantity: next } : line)),
    );
  }, []);

  const removeLine = useCallback((key: string) => {
    setLines((prev) => prev.filter((line) => lineKey(line) !== key));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      addItem,
      setQuantity,
      removeLine,
      clear,
      itemCount: itemCount(lines),
      subtotalCents: subtotalCents(lines),
    }),
    [lines, addItem, setQuantity, removeLine, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
