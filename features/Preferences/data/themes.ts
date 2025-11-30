import { useCustomThemeStore } from '../store/useCustomThemeStore';
import {
  Atom,
  Sun,
  Moon,
  // Sparkles,
  LucideIcon,
  CloudLightning,
  TreePine
} from 'lucide-react';

interface Theme {
  id: string;
  backgroundColor: string;
  cardColor: string;
  borderColor: string;
  mainColor: string;
  secondaryColor: string;
}

interface ThemeGroup {
  name: string;
  icon: LucideIcon;
  themes: Theme[];
}

const themes: ThemeGroup[] = [
  {
    name: 'Base',
    icon: Atom,
    themes: [
      {
        id: 'light',
        backgroundColor: 'oklch(100.00% 0.0000 89.88 / 1)',
        cardColor: 'oklch(92.93% 0.0068 247.90 / 1)',
        borderColor: 'oklch(80.85% 0.0186 248.06 / 1)',

        mainColor: 'oklch(0.00% 0.0000 0.00 / 1)',
        secondaryColor: 'oklch(46.49% 0.0000 89.88 / 1)'
      },
      {
        id: 'dark',
        backgroundColor: 'oklch(22.67% 0.0000 89.88 / 1)',
        cardColor: 'oklch(28.01% 0.0000 89.88 / 1)',
        borderColor: 'oklch(41.84% 0.0000 89.88 / 1)',

        mainColor: 'oklch(100.00% 0.0000 89.88 / 1)',
        secondaryColor: 'oklch(80.54% 0.0000 89.88 / 1)'
      }
    ]
  },
  {
    name: 'Light',
    icon: Sun,
    themes: [
      {
        id: 'long',
        backgroundColor: 'oklch(90.25% 0.0525 6.93 / 1)',
        cardColor: 'oklch(89.20% 0.0587 7.12 / 1)',
        borderColor: 'oklch(84.08% 0.0904 8.20 / 1)',
        mainColor: ' oklch(63.71% 0.1862 304.76 / 1)',
        secondaryColor: 'oklch(66.54% 0.2210 304.03 / 1)'
      },
      {
        id: 'amethyst',
        backgroundColor: 'oklch(94.51% 0.0292 308.12 / 1)',
        cardColor: 'oklch(93.42% 0.0352 308.04 / 1)',
        borderColor: 'oklch(78.21% 0.1209 306.71 / 1)',
        mainColor: 'oklch(62.02% 0.2504 302.41 / 1)',
        secondaryColor: 'oklch(66.54% 0.2210 304.03 / 1)'
      }
    ]
  },

  {
    name: 'Dark',
    icon: Moon,
    themes: [
      {
        id: 'monkeytype',
        backgroundColor: 'oklch(33.94% 0.0062 248.01 / 1)',
        cardColor: 'oklch(38.51% 0.0083 264.47 / 1)',
        borderColor: 'oklch(45.89% 0.0104 264.47 / 1)',
        mainColor: 'oklch(81.03% 0.1625 94.11 / 1)',
        secondaryColor: 'oklch(86.53% 0.0153 96.38 / 1)'
      },
      {
        id: 'nord',
        backgroundColor: 'oklch(33.81% 0.0237 264.19 / 1)',
        cardColor: 'oklch(40.24% 0.0296 264.16 / 1)',
        borderColor: 'oklch(49.01% 0.0375 264.14 / 1)',
        mainColor: 'oklch(77.09% 0.0747 130.82 / 1)',
        secondaryColor: 'oklch(72.67% 0.0638 335.82 / 1)'
      },
      {
        id: 'yukata',
        backgroundColor: 'oklch(19.83% 0.0367 263.24 / 1)',
        cardColor: 'oklch(23.73% 0.0471 263.13 / 1)',
        borderColor: 'oklch(31.15% 0.0648 263.05 / 1)',
        mainColor: 'oklch(65.16% 0.1943 14.70 / 1)',
        secondaryColor: 'oklch(68.92% 0.1657 313.51 / 1)'
      },
      {
        id: 'dusk-voyager',
        backgroundColor: 'oklch(21.71% 0.0239 258.33 / 1)',
        cardColor: 'oklch(26.82% 0.0299 258.32 / 1)',
        borderColor: 'oklch(34.56% 0.0377 258.33 / 1)',
        mainColor: 'oklch(80.65% 0.0930 227.43 / 1)',
        secondaryColor: 'oklch(87.28% 0.1705 94.99 / 1)'
      },
      {
        id: 'aizome',
        backgroundColor: 'oklch(21.50% 0.0352 256.92 / 1)',
        cardColor: 'oklch(25.53% 0.0440 256.94 / 1)',
        borderColor: 'oklch(33.20% 0.0590 256.96 / 1)',
        mainColor: 'oklch(65.35% 0.1437 250.97 / 1)',
        secondaryColor: 'oklch(80.45% 0.0461 76.23 / 1)'
      },
      {
        id: 'fuji',
        backgroundColor: 'oklch(22.26% 0.0193 248.71 / 1)',
        cardColor: 'oklch(26.48% 0.0234 248.72 / 1)',
        borderColor: 'oklch(34.46% 0.0310 248.74 / 1)',
        mainColor: 'oklch(81.68% 0.0590 229.99 / 1)',
        secondaryColor: 'oklch(93.89% 0.0000 89.88 / 1)'
      },

      {
        id: 'arashiyama',
        backgroundColor: 'oklch(23.30% 0.0273 161.53 / 1)',
        cardColor: 'oklch(28.10% 0.0341 161.37 / 1)',
        borderColor: 'oklch(37.13% 0.0465 161.22 / 1)',
        mainColor: 'oklch(76.25% 0.2262 143.95 / 1)',
        secondaryColor: 'oklch(79.81% 0.1006 126.94 / 1)'
      },
      {
        id: 'moonlit-waterfall',
        backgroundColor: 'oklch(23.46% 0.0439 256.98 / 1)',
        cardColor: 'oklch(26.40% 0.0523 257.02 / 1)',
        borderColor: 'oklch(33.92% 0.0734 257.10 / 1)',
        mainColor: 'oklch(77.77% 0.1371 304.09 / 1)',
        secondaryColor: 'oklch(96.20% 0.0564 196.25 / 1)'
      },
      {
        id: 'wasabi-garden',
        backgroundColor: 'oklch(26.82% 0.0502 136.06 / 1)',
        cardColor: 'oklch(31.75% 0.0609 136.11 / 1)',
        borderColor: 'oklch(40.81% 0.0774 136.09 / 1)',
        mainColor: 'oklch(83.94% 0.2480 141.92 / 1)',
        secondaryColor: 'oklch(76.54% 0.1356 68.47 / 1)'
      },
      {
        id: 'wabi',
        backgroundColor: 'oklch(21.79% 0.0174 22.05 / 1)',
        cardColor: 'oklch(25.94% 0.0204 22.03 / 1)',
        borderColor: 'oklch(32.77% 0.0267 22.08 / 1)',
        mainColor: 'oklch(65.46% 0.1938 31.39 / 1)',
        secondaryColor: 'oklch(77.88% 0.0349 70.99 / 1)'
      },

      {
        id: 'matrix',
        backgroundColor: 'oklch(0.00% 0.0000 0.00 / 1)',
        cardColor: 'oklch(12.46% 0.0000 89.88 / 1)',
        borderColor: 'oklch(15.79% 0.0000 89.88 / 1)',
        mainColor: 'oklch(95.50% 0.2946 142.50 / 1)',
        secondaryColor: 'oklch(71.30% 0.1968 141.94 / 1)'
      },
      {
        id: 'incognito',
        backgroundColor: 'oklch(15.79% 0.0000 89.88 / 1)',
        cardColor: 'oklch(16.98% 0.0000 89.88 / 1)',
        borderColor: 'oklch(23.76% 0.0000 89.88 / 1)',
        mainColor: 'oklch(78.54% 0.1978 62.50 / 1)',
        secondaryColor: 'oklch(67.60% 0.1117 74.79 / 1)'
      },
      {
        id: 'noir',
        backgroundColor: 'oklch(0.00% 0.0000 0.00 / 1)',
        cardColor: 'oklch(15.79% 0.0000 89.88 / 1)',
        borderColor: 'oklch(32.11% 0.0000 89.88 / 1)',
        mainColor: 'oklch(100.00% 0.0000 89.88 / 1)',
        secondaryColor: 'oklch(80.54% 0.0000 89.88 / 1)'
      },

      {
        id: 'midnight-blossom',
        backgroundColor: 'oklch(22.87% 0.0552 301.41 / 1)',
        cardColor: 'oklch(25.50% 0.0649 301.17 / 1)',
        borderColor: 'oklch(34.90% 0.0726 301.99 / 1)',
        mainColor: 'oklch(65.03% 0.2011 353.35 / 1)',
        secondaryColor: 'oklch(67.48% 0.1719 317.18 / 1)'
      },
      {
        id: 'neon-dusk',
        backgroundColor: 'oklch(17.57% 0.0580 286.44 / 1)',
        cardColor: 'oklch(21.50% 0.0812 284.90 / 1)',
        borderColor: 'oklch(28.51% 0.0794 287.95 / 1)',
        mainColor: 'oklch(80.54% 0.1459 219.21 / 1)',
        secondaryColor: 'oklch(81.54% 0.1673 84.27 / 1)'
      },
      {
        id: 'mystic-forest',
        backgroundColor: 'oklch(25.62% 0.0314 158.36 / 1)',
        cardColor: 'oklch(31.80% 0.0444 157.76 / 1)',
        borderColor: 'oklch(40.08% 0.0506 158.24 / 1)',
        mainColor: 'oklch(69.45% 0.2065 141.03 / 1)',
        secondaryColor: 'oklch(77.00% 0.1352 133.99 / 1)'
      },
      {
        id: 'velvet-night',
        backgroundColor: 'oklch(23.59% 0.0238 263.95 / 1)',
        cardColor: 'oklch(27.50% 0.0300 263.89 / 1)',
        borderColor: 'oklch(37.93% 0.0386 263.95 / 1)',
        mainColor: 'oklch(56.39% 0.2560 301.81 / 1)',
        secondaryColor: 'oklch(60.45% 0.2182 7.97 / 1)'
      },
      {
        id: 'cosmic-charcoal',
        backgroundColor: 'oklch(22.41% 0.0104 248.29 / 1)',
        cardColor: 'oklch(26.64% 0.0135 248.33 / 1)',
        borderColor: 'oklch(36.57% 0.0208 248.40 / 1)',
        mainColor: 'oklch(70.54% 0.1799 38.53 / 1)',
        secondaryColor: 'oklch(74.54% 0.1778 55.17 / 1)'
      },
      {
        id: 'sapphire-frost',
        backgroundColor: 'oklch(21.22% 0.0365 248.44 / 1)',
        cardColor: 'oklch(25.55% 0.0484 248.85 / 1)',
        borderColor: 'oklch(37.46% 0.0569 241.55 / 1)',
        mainColor: 'oklch(81.72% 0.1224 225.37 / 1)',
        secondaryColor: 'oklch(82.37% 0.0918 182.03 / 1)'
      },
      {
        id: 'jade-mirage',
        backgroundColor: 'oklch(26.31% 0.0204 175.21 / 1)',
        cardColor: 'oklch(31.32% 0.0298 174.53 / 1)',
        borderColor: 'oklch(42.44% 0.0425 177.68 / 1)',
        mainColor: 'oklch(78.16% 0.1692 156.42 / 1)',
        secondaryColor: 'oklch(78.87% 0.1288 179.07 / 1)'
      },
      {
        id: 'nebula-veil',
        backgroundColor: 'oklch(20.05% 0.0344 289.02 / 1)',
        cardColor: 'oklch(25.29% 0.0661 299.33 / 1)',
        borderColor: 'oklch(36.33% 0.1315 317.36 / 1)',
        mainColor: 'oklch(76.15% 0.1814 322.77 / 1)',
        secondaryColor: 'oklch(84.57% 0.1067 216.31 / 1)'
      },
      {
        id: 'citrus-dream',
        backgroundColor: 'oklch(22.81% 0.0444 309.31 / 1)',
        cardColor: 'oklch(26.38% 0.0604 308.94 / 1)',
        borderColor: 'oklch(35.15% 0.0886 308.67 / 1)',
        mainColor: 'oklch(90.30% 0.1538 95.00 / 1)',
        secondaryColor: 'oklch(72.77% 0.1706 41.25 / 1)'
      },
      {
        id: 'arctic-inferno',
        backgroundColor: 'oklch(24.29% 0.0410 259.59 / 1)',
        cardColor: 'oklch(26.12% 0.0691 262.60 / 1)',
        borderColor: 'oklch(34.86% 0.1014 262.43 / 1)',
        mainColor: 'oklch(69.62% 0.1864 29.03 / 1)',
        secondaryColor: 'oklch(90.62% 0.1382 196.68 / 1)'
      },
      {
        id: 'haunted-lagoon',
        backgroundColor: 'oklch(23.02% 0.0371 221.64 / 1)',
        cardColor: 'oklch(30.16% 0.0391 190.86 / 1)',
        borderColor: 'oklch(46.56% 0.0651 190.55 / 1)',
        mainColor: 'oklch(84.05% 0.1487 175.10 / 1)',
        secondaryColor: 'oklch(76.62% 0.1215 143.15 / 1)'
      },
      {
        id: 'celestial-grove',
        backgroundColor: 'oklch(23.71% 0.0245 182.34 / 1)',
        cardColor: 'oklch(30.27% 0.0356 181.77 / 1)',
        borderColor: 'oklch(42.23% 0.0535 181.37 / 1)',
        mainColor: 'oklch(82.23% 0.1888 129.99 / 1)',
        secondaryColor: 'oklch(85.46% 0.1464 86.88 / 1)'
      },
      {
        id: 'amethyst-nightfall',
        backgroundColor: 'oklch(21.95% 0.0432 311.57 / 1)',
        cardColor: 'oklch(27.40% 0.0674 311.14 / 1)',
        borderColor: 'oklch(36.20% 0.0970 310.92 / 1)',
        mainColor: 'oklch(66.69% 0.2159 319.91 / 1)',
        secondaryColor: 'oklch(68.80% 0.1314 255.70 / 1)'
      },
      {
        id: 'luminous-tide',
        backgroundColor: 'oklch(22.28% 0.0328 247.92 / 1)',
        cardColor: 'oklch(27.59% 0.0491 248.57 / 1)',
        borderColor: 'oklch(37.52% 0.0732 249.00 / 1)',
        mainColor: 'oklch(86.48% 0.1570 89.55 / 1)',
        secondaryColor: 'oklch(78.54% 0.1352 212.60 / 1)'
      },
      {
        id: 'andromeda-dream',
        backgroundColor: 'oklch(18.70% 0.0520 299.85 / 1)',
        cardColor: 'oklch(23.80% 0.0794 298.62 / 1)',
        borderColor: 'oklch(32.73% 0.1213 297.67 / 1)',
        mainColor: 'oklch(75.15% 0.1685 335.07 / 1)',
        secondaryColor: 'oklch(83.38% 0.1191 221.07 / 1)'
      },
      {
        id: 'luminous-nebula',
        backgroundColor: 'oklch(15.68% 0.0646 275.10 / 1)',
        cardColor: 'oklch(20.80% 0.1061 271.68 / 1)',
        borderColor: 'oklch(29.27% 0.1656 269.46 / 1)',
        mainColor: 'oklch(71.79% 0.2345 319.14 / 1)',
        secondaryColor: 'oklch(83.78% 0.1014 229.56 / 1)'
      },
      {
        id: 'seraphic-aurora',
        backgroundColor: 'oklch(22.15% 0.0424 259.54 / 1)',
        cardColor: 'oklch(32.52% 0.0488 227.28 / 1)',
        borderColor: 'oklch(43.62% 0.0693 227.89 / 1)',
        mainColor: 'oklch(88.48% 0.1989 157.31 / 1)',
        secondaryColor: 'oklch(71.37% 0.1905 307.67 / 1)'
      },
      {
        id: 'cosmic-prism',
        backgroundColor: 'oklch(21.21% 0.0748 318.23 / 1)',
        cardColor: 'oklch(28.51% 0.1183 317.68 / 1)',
        borderColor: 'oklch(38.20% 0.1663 317.40 / 1)',
        mainColor: 'oklch(72.27% 0.1844 3.12 / 1)',
        secondaryColor: 'oklch(90.99% 0.1311 193.52 / 1)'
      },
      {
        id: 'opaline-zodiac',
        backgroundColor: 'oklch(26.41% 0.0350 226.27 / 1)',
        cardColor: 'oklch(33.67% 0.0510 227.36 / 1)',
        borderColor: 'oklch(44.69% 0.0712 227.93 / 1)',
        mainColor: 'oklch(91.01% 0.1388 185.50 / 1)',
        secondaryColor: 'oklch(95.51% 0.1496 105.14 / 1)'
      },
      {
        id: 'velvet-abyss',
        backgroundColor: 'oklch(16.24% 0.0498 294.14 / 1)',
        cardColor: 'oklch(19.62% 0.0694 292.66 / 1)',
        borderColor: 'oklch(29.12% 0.1215 290.58 / 1)',
        mainColor: 'oklch(64.44% 0.1950 34.93 / 1)',
        secondaryColor: 'oklch(87.65% 0.1319 182.76 / 1)'
      },
      {
        id: 'polaris-veil',
        backgroundColor: 'oklch(21.62% 0.0410 265.53 / 1)',
        cardColor: 'oklch(26.24% 0.0552 265.28 / 1)',
        borderColor: 'oklch(36.62% 0.0863 264.97 / 1)',
        mainColor: 'oklch(83.66% 0.1106 224.33 / 1)',
        secondaryColor: 'oklch(97.38% 0.1589 109.02 / 1)'
      },
      {
        id: 'rose-nebula',
        backgroundColor: 'oklch(23.94% 0.0531 333.58 / 1)',
        cardColor: 'oklch(29.98% 0.0728 333.84 / 1)',
        borderColor: 'oklch(38.55% 0.1000 334.04 / 1)',
        mainColor: 'oklch(70.55% 0.1483 6.90 / 1)',
        secondaryColor: 'oklch(72.31% 0.1853 307.81 / 1)'
      },
      {
        id: 'azure-twilight',
        backgroundColor: 'oklch(21.29% 0.0290 262.37 / 1)',
        cardColor: 'oklch(26.08% 0.0422 262.19 / 1)',
        borderColor: 'oklch(36.07% 0.0655 262.06 / 1)',
        mainColor: 'oklch(84.26% 0.1387 209.07 / 1)',
        secondaryColor: 'oklch(75.40% 0.1203 299.61 / 1)'
      },
      {
        id: 'ethereal-dawn',
        backgroundColor: 'oklch(20.35% 0.0615 298.46 / 1)',
        cardColor: 'oklch(24.34% 0.0886 296.93 / 1)',
        borderColor: 'oklch(33.88% 0.1360 295.82 / 1)',
        mainColor: 'oklch(86.20% 0.1411 83.89 / 1)',
        secondaryColor: 'oklch(86.02% 0.1234 183.17 / 1)'
      },
      {
        id: 'hyperion-skies',
        backgroundColor: 'oklch(22.30% 0.0359 248.20 / 1)',
        cardColor: 'oklch(28.64% 0.0542 248.85 / 1)',
        borderColor: 'oklch(37.57% 0.0769 249.26 / 1)',
        mainColor: 'oklch(79.59% 0.1207 231.06 / 1)',
        secondaryColor: 'oklch(88.72% 0.1622 92.81 / 1)'
      },
      {
        id: 'astral-mirage',
        backgroundColor: 'oklch(23.36% 0.0353 215.33 / 1)',
        cardColor: 'oklch(29.44% 0.0483 216.81 / 1)',
        borderColor: 'oklch(47.94% 0.0829 218.37 / 1)',
        mainColor: 'oklch(69.91% 0.1962 305.80 / 1)',
        secondaryColor: 'oklch(88.16% 0.1511 93.44 / 1)'
      },
      {
        id: 'oceanic-aurora',
        backgroundColor: 'oklch(24.46% 0.0436 241.01 / 1)',
        cardColor: 'oklch(30.23% 0.0599 242.08 / 1)',
        borderColor: 'oklch(40.92% 0.0866 242.95 / 1)',
        mainColor: 'oklch(87.55% 0.1607 168.05 / 1)',
        secondaryColor: 'oklch(75.70% 0.1479 313.81 / 1)'
      },
      {
        id: 'zephyrite-dream',
        backgroundColor: 'oklch(24.42% 0.0251 168.14 / 1)',
        cardColor: 'oklch(32.07% 0.0403 167.15 / 1)',
        borderColor: 'oklch(45.71% 0.0620 166.65 / 1)',
        mainColor: 'oklch(81.58% 0.1131 224.68 / 1)',
        secondaryColor: 'oklch(85.83% 0.2104 136.05 / 1)'
      },
      {
        id: 'lapis-cascade',
        backgroundColor: 'oklch(21.47% 0.0366 256.94 / 1)',
        cardColor: 'oklch(27.33% 0.0581 257.08 / 1)',
        borderColor: 'oklch(38.36% 0.0904 257.21 / 1)',
        mainColor: 'oklch(70.00% 0.1570 273.18 / 1)',
        secondaryColor: 'oklch(81.56% 0.1374 207.64 / 1)'
      },
      {
        id: 'lucid-dusk',
        backgroundColor: 'oklch(20.83% 0.0537 285.29 / 1)',
        cardColor: 'oklch(24.56% 0.0754 283.89 / 1)',
        borderColor: 'oklch(32.11% 0.1085 282.94 / 1)',
        mainColor: 'oklch(70.85% 0.1490 27.94 / 1)',
        secondaryColor: 'oklch(90.41% 0.1302 198.38 / 1)'
      },
      {
        id: 'sapphire-bloom',
        backgroundColor: 'oklch(23.44% 0.0432 267.85 / 1)',
        cardColor: 'oklch(27.60% 0.0641 267.11 / 1)',
        borderColor: 'oklch(36.82% 0.0939 266.77 / 1)',
        mainColor: 'oklch(79.09% 0.1242 299.66 / 1)',
        secondaryColor: 'oklch(89.39% 0.1672 171.49 / 1)'
      },
      {
        id: 'celestite-frost',
        backgroundColor: 'oklch(26.22% 0.0304 223.60 / 1)',
        cardColor: 'oklch(33.52% 0.0465 224.69 / 1)',
        borderColor: 'oklch(44.45% 0.0651 225.15 / 1)',
        mainColor: 'oklch(90.72% 0.0634 222.26 / 1)',
        secondaryColor: 'oklch(78.12% 0.1599 336.29 / 1)'
      },
      {
        id: 'topaz-drift',
        backgroundColor: 'oklch(24.96% 0.0256 184.90 / 1)',
        cardColor: 'oklch(32.79% 0.0389 184.31 / 1)',
        borderColor: 'oklch(46.84% 0.0594 183.97 / 1)',
        mainColor: 'oklch(89.58% 0.1336 91.10 / 1)',
        secondaryColor: 'oklch(72.65% 0.1523 43.04 / 1)'
      },
      {
        id: 'nebulous-maw',
        backgroundColor: 'oklch(15.98% 0.0489 288.97 / 1)',
        cardColor: 'oklch(23.08% 0.1042 279.67 / 1)',
        borderColor: 'oklch(30.25% 0.1484 277.99 / 1)',
        mainColor: 'oklch(89.75% 0.1441 92.30 / 1)',
        secondaryColor: 'oklch(79.15% 0.1581 341.83 / 1)'
      },
      {
        id: 'ultraviolet-oracle',
        backgroundColor: 'oklch(16.82% 0.0727 297.93 / 1)',
        cardColor: 'oklch(23.37% 0.1116 296.97 / 1)',
        borderColor: 'oklch(34.21% 0.1751 295.00 / 1)',
        mainColor: 'oklch(74.03% 0.1392 250.23 / 1)',
        secondaryColor: 'oklch(70.60% 0.1901 307.64 / 1)'
      },
      {
        id: 'blue-emberveil',
        backgroundColor: 'oklch(20.77% 0.0383 252.95 / 1)',
        cardColor: 'oklch(26.42% 0.0597 319.39 / 1)',
        borderColor: 'oklch(38.45% 0.0974 319.35 / 1)',
        mainColor: 'oklch(81.14% 0.1094 230.16 / 1)',
        secondaryColor: 'oklch(71.88% 0.1772 43.31 / 1)'
      },
      {
        id: 'nautilus-star',
        backgroundColor: 'oklch(19.37% 0.0229 240.54 / 1)',
        cardColor: 'oklch(28.27% 0.0410 241.32 / 1)',
        borderColor: 'oklch(41.45% 0.0667 241.87 / 1)',
        mainColor: 'oklch(72.83% 0.1420 246.20 / 1)',
        secondaryColor: 'oklch(82.85% 0.1123 65.21 / 1)'
      },
      {
        id: 'cyanic-wisdom',
        backgroundColor: 'oklch(21.86% 0.0305 226.59 / 1)',
        cardColor: 'oklch(28.42% 0.0564 240.68 / 1)',
        borderColor: 'oklch(42.72% 0.0925 242.06 / 1)',
        mainColor: 'oklch(86.20% 0.1078 216.26 / 1)',
        secondaryColor: 'oklch(75.50% 0.1398 350.60 / 1)'
      },
      {
        id: 'twilight-oracle',
        backgroundColor: 'oklch(20.48% 0.0501 293.80 / 1)',
        cardColor: 'oklch(23.88% 0.0638 293.26 / 1)',
        borderColor: 'oklch(31.17% 0.0923 292.52 / 1)',
        mainColor: 'oklch(69.17% 0.1819 27.93 / 1)',
        secondaryColor: 'oklch(75.61% 0.0937 245.86 / 1)'
      },
      {
        id: 'galaxy-oracle',
        backgroundColor: 'oklch(16.40% 0.0417 259.26 / 1)',
        cardColor: 'oklch(20.58% 0.0864 286.85 / 1)',
        borderColor: 'oklch(28.93% 0.1370 284.60 / 1)',
        mainColor: 'oklch(79.95% 0.1588 324.56 / 1)',
        secondaryColor: 'oklch(71.36% 0.1484 265.31 / 1)'
      },
      {
        id: 'fathom-frost',
        backgroundColor: 'oklch(22.55% 0.0320 232.35 / 1)',
        cardColor: 'oklch(26.08% 0.0459 237.70 / 1)',
        borderColor: 'oklch(41.62% 0.0821 239.18 / 1)',
        mainColor: 'oklch(83.21% 0.2489 143.51 / 1)',
        secondaryColor: 'oklch(79.37% 0.1483 339.93 / 1)'
      },
      {
        id: 'lapis-solara',
        backgroundColor: 'oklch(17.75% 0.0468 268.47 / 1)',
        cardColor: 'oklch(30.13% 0.0662 248.46 / 1)',
        borderColor: 'oklch(42.16% 0.1001 249.19 / 1)',
        mainColor: 'oklch(96.43% 0.1338 105.98 / 1)',
        secondaryColor: 'oklch(77.85% 0.1273 297.95 / 1)'
      },
      {
        id: 'arcane-fathoms',
        backgroundColor: 'oklch(21.67% 0.0429 245.91 / 1)',
        cardColor: 'oklch(25.10% 0.0530 246.80 / 1)',
        borderColor: 'oklch(32.68% 0.0751 247.70 / 1)',
        mainColor: 'oklch(85.76% 0.1843 135.05 / 1)',
        secondaryColor: 'oklch(79.04% 0.1466 314.59 / 1)'
      },
      {
        id: 'melancholy-halo',
        backgroundColor: 'oklch(19.30% 0.0200 266.53 / 1)',
        cardColor: 'oklch(24.77% 0.0460 292.68 / 1)',
        borderColor: 'oklch(34.02% 0.0713 292.14 / 1)',
        mainColor: 'oklch(68.33% 0.1789 294.23 / 1)',
        secondaryColor: 'oklch(88.93% 0.1602 165.64 / 1)'
      },
      {
        id: 'azure-mirage',
        backgroundColor: 'oklch(21.30% 0.0376 214.94 / 1)',
        cardColor: 'oklch(34.64% 0.0610 218.40 / 1)',
        borderColor: 'oklch(49.62% 0.0890 219.80 / 1)',
        mainColor: 'oklch(68.80% 0.2066 305.48 / 1)',
        secondaryColor: 'oklch(92.90% 0.1558 100.57 / 1)'
      },
      {
        id: 'cobalt-lumen',
        backgroundColor: 'oklch(19.79% 0.0422 241.46 / 1)',
        cardColor: 'oklch(29.59% 0.0703 251.48 / 1)',
        borderColor: 'oklch(42.28% 0.1094 252.17 / 1)',
        mainColor: 'oklch(82.82% 0.1215 219.38 / 1)',
        secondaryColor: 'oklch(71.03% 0.2822 327.32 / 1)'
      },
      {
        id: 'prairie-star',
        backgroundColor: 'oklch(20.92% 0.0367 263.32 / 1)',
        cardColor: 'oklch(27.43% 0.0583 263.01 / 1)',
        borderColor: 'oklch(36.21% 0.0844 262.84 / 1)',
        mainColor: 'oklch(62.77% 0.1885 260.52 / 1)',
        secondaryColor: 'oklch(66.30% 0.2056 24.71 / 1)'
      },
      {
        id: 'midnight-fjord',
        backgroundColor: 'oklch(22.37% 0.0385 258.28 / 1)',
        cardColor: 'oklch(29.46% 0.0637 255.88 / 1)',
        borderColor: 'oklch(40.47% 0.0954 256.06 / 1)',
        mainColor: 'oklch(89.81% 0.1593 94.71 / 1)',
        secondaryColor: 'oklch(80.50% 0.1237 229.36 / 1)'
      },
      {
        id: 'liquid-graphite',
        backgroundColor: 'oklch(19.94% 0.0081 267.13 / 1)',
        cardColor: 'oklch(29.18% 0.0148 267.05 / 1)',
        borderColor: 'oklch(41.37% 0.0234 267.00 / 1)',
        mainColor: 'oklch(76.61% 0.1036 222.57 / 1)',
        secondaryColor: 'oklch(76.33% 0.1672 57.87 / 1)'
      },
      {
        id: 'rainforest-mist',
        backgroundColor: 'oklch(24.08% 0.0271 155.33 / 1)',
        cardColor: 'oklch(33.42% 0.0427 154.90 / 1)',
        borderColor: 'oklch(44.25% 0.0605 154.64 / 1)',
        mainColor: 'oklch(76.05% 0.0706 200.04 / 1)',
        secondaryColor: 'oklch(83.86% 0.1351 87.45 / 1)'
      },
      {
        id: 'jungle-twilight',
        backgroundColor: 'oklch(23.37% 0.0231 175.48 / 1)',
        cardColor: 'oklch(31.97% 0.0356 174.93 / 1)',
        borderColor: 'oklch(43.35% 0.0518 174.56 / 1)',
        mainColor: 'oklch(78.06% 0.1476 57.34 / 1)',
        secondaryColor: 'oklch(64.23% 0.1482 284.44 / 1)'
      },
      {
        id: 'neon-tokyo',
        backgroundColor: 'oklch(22.71% 0.0340 319.46 / 1)',
        cardColor: 'oklch(29.61% 0.0501 319.45 / 1)',
        borderColor: 'oklch(38.83% 0.0712 319.44 / 1)',
        mainColor: 'oklch(70.51% 0.2067 349.65 / 1)',
        secondaryColor: 'oklch(76.88% 0.1491 229.14 / 1)'
      },
      {
        id: 'nyc-midnight',
        backgroundColor: 'oklch(21.05% 0.0241 272.25 / 1)',
        cardColor: 'oklch(26.72% 0.0351 271.97 / 1)',
        borderColor: 'oklch(37.29% 0.0551 271.69 / 1)',
        mainColor: 'oklch(88.35% 0.1514 90.24 / 1)',
        secondaryColor: 'oklch(80.43% 0.1296 218.65 / 1)'
      },
      {
        id: 'paris-metro',
        backgroundColor: 'oklch(24.24% 0.0137 258.37 / 1)',
        cardColor: 'oklch(31.25% 0.0198 258.37 / 1)',
        borderColor: 'oklch(39.73% 0.0271 258.37 / 1)',
        mainColor: 'oklch(66.40% 0.1844 1.84 / 1)',
        secondaryColor: 'oklch(94.43% 0.1789 109.39 / 1)'
      },
      {
        id: 'london-fog',
        backgroundColor: 'oklch(26.98% 0.0079 234.94 / 1)',
        cardColor: 'oklch(33.13% 0.0104 234.98 / 1)',
        borderColor: 'oklch(42.81% 0.0144 235.02 / 1)',
        mainColor: 'oklch(80.86% 0.0632 119.23 / 1)',
        secondaryColor: 'oklch(79.21% 0.0976 244.15 / 1)'
      },
      {
        id: 'synthwave-night',
        backgroundColor: 'oklch(22.85% 0.0341 302.93 / 1)',
        cardColor: 'oklch(29.27% 0.0492 302.64 / 1)',
        borderColor: 'oklch(38.73% 0.0708 302.40 / 1)',
        mainColor: 'oklch(71.26% 0.2322 338.26 / 1)',
        secondaryColor: 'oklch(89.39% 0.1507 182.75 / 1)'
      },
      {
        id: 'old-library',
        backgroundColor: 'oklch(24.40% 0.0136 74.48 / 1)',
        cardColor: 'oklch(32.05% 0.0200 74.39 / 1)',
        borderColor: 'oklch(43.25% 0.0293 74.32 / 1)',
        secondaryColor: 'oklch(71.19% 0.0756 66.11 / 1)',
        mainColor: 'oklch(86.40% 0.1653 93.75 / 1)'
      },
      {
        id: 'vaporpop',
        backgroundColor: 'oklch(27.52% 0.0194 190.93 / 1)',
        cardColor: 'oklch(35.41% 0.0271 190.79 / 1)',
        borderColor: 'oklch(48.02% 0.0391 190.68 / 1)',
        mainColor: 'oklch(81.91% 0.1399 338.07 / 1)',
        secondaryColor: 'oklch(96.69% 0.1969 110.57 / 1)'
      },
      {
        id: 'absolute-darkness',
        backgroundColor: 'oklch(13.77% 0.0125 304.02 / 1)',
        cardColor: 'oklch(24.26% 0.0190 284.90 / 1)',
        borderColor: 'oklch(31.69% 0.0279 284.70 / 1)',
        mainColor: 'oklch(65.85% 0.1592 53.69 / 1)',
        secondaryColor: 'oklch(59.04% 0.2430 304.10 / 1)'
      },

      {
        id: 'catppuccin',
        backgroundColor: 'oklch(24.38% 0.0305 283.91 / 1)',
        cardColor: 'oklch(32.67% 0.0234 274.82 / 1)',
        borderColor: 'oklch(61.22% 0.0380 276.32 / 1)',
        mainColor: 'oklch(82.07% 0.0990 299.48 / 1)',
        secondaryColor: 'oklch(87.84% 0.0426 272.09 / 1)'
      },
      {
        id: 'cosmic-dream',
        backgroundColor: 'oklch(18.85% 0.0666 294.49 / 1)',
        cardColor: 'oklch(24.59% 0.0991 292.94 / 1)',
        borderColor: 'oklch(30.06% 0.1288 292.04 / 1)',
        mainColor: 'oklch(71.93% 0.2621 323.58 / 1)',
        secondaryColor: 'oklch(92.30% 0.0609 214.79 / 1)'
      },
      {
        id: 'dreamwave-mirage',
        backgroundColor: 'oklch(19.69% 0.0908 288.04 / 1)',
        cardColor: 'oklch(22.90% 0.1117 286.66 / 1)',
        borderColor: 'oklch(29.05% 0.1506 285.02 / 1)',
        mainColor: 'oklch(66.39% 0.2381 359.36 / 1)',
        secondaryColor: 'oklch(83.18% 0.1354 212.90 / 1)'
      },
      {
        id: 'coral-abyss',
        backgroundColor: 'oklch(21.08% 0.0399 250.21 / 1)',
        cardColor: 'oklch(25.36% 0.0507 250.48 / 1)',
        borderColor: 'oklch(33.41% 0.0693 250.66 / 1)',
        mainColor: 'oklch(71.96% 0.1494 39.01 / 1)',
        secondaryColor: 'oklch(88.63% 0.1367 194.97 / 1)'
      }
    ]
  },

  // 🎃 NEW HALLOWEEN THEME GROUP 🎃
  {
    name: 'Halloween',
    icon: CloudLightning, // Using Moon, as suggested, but could be a custom icon
    themes: [
      {
        id: 'pumpkin-night',
        // Dark, deep purple/black background
        backgroundColor: 'oklch(18.52% 0.0184 314.34 / 1)',
        cardColor: 'oklch(25.39% 0.0394 314.05 / 1)',
        borderColor: 'oklch(31.97% 0.0543 313.96 / 1)',
        // Bright orange for main focus
        mainColor: 'oklch(74.61% 0.1715 51.56 / 1)',
        // Spooky accent color (magenta/purple)
        secondaryColor: 'oklch(63.26% 0.2293 339.96 / 1)'
      },
      {
        id: 'spooky-glow',
        // Very dark background
        backgroundColor: 'oklch(15.70% 0.0034 248.05 / 1)',
        cardColor: 'oklch(23.49% 0.0112 248.30 / 1)',
        borderColor: 'oklch(33.67% 0.0187 248.38 / 1)',
        // Neon green/slime color for main focus
        mainColor: 'oklch(88.07% 0.1974 131.90 / 1)',
        // Bright purple for contrast
        secondaryColor: 'oklch(67.13% 0.2017 304.62 / 1)'
      }
    ]
  },

  // 🎄 CHRISTMAS THEME GROUP 🎄
  {
    name: 'Christmas',
    icon: TreePine,
    themes: [
      {
        id: 'santa-night',
        // Deep night blue background
        backgroundColor: 'oklch(21.77% 0.0430 263.13 / 1)',
        cardColor: 'oklch(27.18% 0.0666 262.75 / 1)',
        borderColor: 'oklch(33.33% 0.0876 262.61 / 1)',
        // Bright festive red
        mainColor: 'oklch(61.42% 0.2261 23.63 / 1)',
        // Golden star accent
        secondaryColor: 'oklch(85.33% 0.1706 86.75 / 1)'
      },
      {
        id: 'winter-wonderland',
        // Cool mint background
        backgroundColor: 'oklch(94.76% 0.0133 185.08 / 1)',
        cardColor: 'oklch(92.36% 0.0231 184.79 / 1)',
        borderColor: 'oklch(84.10% 0.0478 183.89 / 1)',
        // Peppermint red
        mainColor: 'oklch(58.04% 0.2202 24.52 / 1)',
        // Fresh mint green
        secondaryColor: 'oklch(70.13% 0.1252 171.56 / 1)'
      },
      {
        id: 'christmas-eve',
        // Midnight blue background
        backgroundColor: 'oklch(23.26% 0.0557 272.84 / 1)',
        cardColor: 'oklch(28.66% 0.0854 271.52 / 1)',
        borderColor: 'oklch(34.89% 0.1104 271.08 / 1)',
        // Warm golden light
        mainColor: 'oklch(85.68% 0.1599 89.08 / 1)',
        // Holly green
        secondaryColor: 'oklch(61.95% 0.1489 150.29 / 1)'
      },

      {
        id: 'northern-lights',
        // Dark arctic night
        backgroundColor: 'oklch(21.92% 0.0178 230.20 / 1)',
        cardColor: 'oklch(28.75% 0.0303 230.90 / 1)',
        borderColor: 'oklch(38.18% 0.0437 231.21 / 1)',
        // Bright aurora green
        mainColor: 'oklch(86.12% 0.1660 169.64 / 1)',
        // Aurora purple/pink
        secondaryColor: 'oklch(65.57% 0.2272 312.53 / 1)'
      }
    ]
  }
];

// Flatten all themes into a map for easy lookup
const themeMap = new Map<string, Theme>();
themes.forEach(group => {
  group.themes.forEach(theme => {
    themeMap.set(theme.id, theme);
  });
});

// populate map immediately with current store state
useCustomThemeStore
  .getState()
  .themes.forEach(theme => themeMap.set(theme.id, theme));

// subscription for store updates
useCustomThemeStore.subscribe(state => {
  state.themes.forEach(theme => themeMap.set(theme.id, theme));
});

export function applyTheme(themeId: string) {
  const theme = themeMap.get(themeId);

  if (!theme) {
    console.error(`Theme "${themeId}" not found`);
    return;
  }

  const root = document.documentElement;

  root.style.setProperty('--background-color', theme.backgroundColor);
  root.style.setProperty('--card-color', theme.cardColor);
  root.style.setProperty('--border-color', theme.borderColor);
  root.style.setProperty('--main-color', theme.mainColor);

  if (theme.secondaryColor) {
    root.style.setProperty('--secondary-color', theme.secondaryColor);
  }

  root.setAttribute('data-theme', theme.id);
}

// Apply a theme object directly (live preview theme)
export function applyThemeObject(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty('--background-color', theme.backgroundColor);
  root.style.setProperty('--card-color', theme.cardColor);
  root.style.setProperty('--border-color', theme.borderColor);
  root.style.setProperty('--main-color', theme.mainColor);
  if (theme.secondaryColor)
    root.style.setProperty('--secondary-color', theme.secondaryColor);
}

// Helper to get a specific theme
export function getTheme(themeId: string): Theme | undefined {
  return themeMap.get(themeId);
}

// Convert hex to OKLCH
export function hexToOklch(hex: string, valuesOnly = false) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result || result.length !== 4) throw 'Failed to parse hex';

  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;

  // Convert sRGB to linear RGB
  r = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  // Convert linear RGB to OKLab
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

  // Convert to LCH
  const C = Math.sqrt(a * a + b_ * b_);
  let H = Math.atan2(b_, a) * (180 / Math.PI);
  if (H < 0) H += 360;

  const cssString = valuesOnly
    ? `${L.toFixed(4)} ${C.toFixed(4)} ${H.toFixed(2)}`
    : `oklch(${L.toFixed(4)} ${C.toFixed(4)} ${H.toFixed(2)})`;

  return cssString;
}

export default themes;
