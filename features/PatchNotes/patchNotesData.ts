export interface PatchNote {
  version: string;
  date: string;
  changes: string[];
}

export const patchNotesData: PatchNote[] = [
  {
    version: '0.1.7',
    date: 'December 3, 2025',
    changes: [
      'Refactored TopBar to BottomBar for better mobile experience',
      'Added aesthetic gradient background to progress bars',
      'Improved Character Selection Menu UI',
      'Added currently selected font name to BottomBar',
      'Fixed Kana spacing and centered decorations',
      'Mobile improvements: BackToTop position and Start Training button'
    ]
  },
  {
    version: '0.1.6',
    date: 'November 30, 2025',
    changes: [
      'Added streak counter to all game modes (Kana, Vocabulary, and Kanji)',
      'Streak counter now displays in real-time during gameplay',
      'Track your best streak across all game modes',
      'Improved stats tracking and display in game results'
    ]
  }
];
