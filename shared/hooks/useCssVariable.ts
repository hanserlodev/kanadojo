'use client';
import { useState, useEffect } from 'react';

/**
 * Safely get a CSS variable value on the client side.
 * Returns empty string during SSR to avoid hydration issues.
 */
export function useCssVariable(variableName: string): string {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cssValue = getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim();
      setValue(cssValue);
    }
  }, [variableName]);

  return value;
}

/**
 * Get a CSS variable value safely (returns fallback during SSR).
 * Use this for inline styles that need immediate values.
 */
export function getCssVariableSafe(
  variableName: string,
  fallback = ''
): string {
  if (typeof window === 'undefined') return fallback;
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim() || fallback
  );
}
