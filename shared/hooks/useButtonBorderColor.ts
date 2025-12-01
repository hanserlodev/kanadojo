'use client';
import { useMemo } from 'react';
import { useCssVariable } from './useCssVariable';
import { generateButtonBorderColor } from '@/features/Preferences/data/themes';

/**
 * Custom hook to generate a button border color from a CSS variable.
 * Memoizes the result for performance.
 *
 * @param cssVariableName - The CSS variable name (e.g., '--main-color')
 * @returns The generated border color string
 */
export function useButtonBorderColor(cssVariableName: string): string {
  const colorValue = useCssVariable(cssVariableName);

  const borderColor = useMemo(() => {
    if (!colorValue) return '';
    return generateButtonBorderColor(colorValue);
  }, [colorValue]);

  return borderColor;
}
