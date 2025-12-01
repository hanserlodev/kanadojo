// Empty decoration fonts for development
// This file is used in development to completely bypass font loading

type DecorationFont = {
  name: string;
  font: {
    className: string;
  };
};

export const decorationFonts: DecorationFont[] = [];
