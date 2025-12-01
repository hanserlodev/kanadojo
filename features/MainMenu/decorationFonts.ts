// Conditional font loading based on environment
// This file acts as a router to prevent font compilation in development

type DecorationFont = {
  name: string;
  font: {
    className: string;
  };
};

// Use the appropriate fonts file based on environment
const decorationFonts: DecorationFont[] =
  process.env.NODE_ENV === 'production'
    ? require('./decorationFonts.prod').decorationFonts
    : require('./decorationFonts.dev').decorationFonts;

export { decorationFonts };
