'use client';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Link } from '@/core/i18n/routing';
import useKanaStore from '@/features/Kana/store/useKanaStore';
import useKanjiStore from '@/features/Kanji/store/useKanjiStore';
import useVocabStore from '@/features/Vocabulary/store/useVocabStore';
import usePreferencesStore from '@/features/Preferences/store/usePreferencesStore';
import { useClick } from '@/shared/hooks/useAudio';
import { Play, Timer } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface ITopBarProps {
  currentDojo: string;
}

const TopBar: React.FC<ITopBarProps> = ({ currentDojo }: ITopBarProps) => {
  const hotkeysOn = usePreferencesStore(state => state.hotkeysOn);

  const { playClick } = useClick();

  // Kana store
  const selectedGameModeKana = useKanaStore(
    state => state.selectedGameModeKana
  );
  const kanaGroupIndices = useKanaStore(state => state.kanaGroupIndices);

  // Kanji store
  const selectedGameModeKanji = useKanjiStore(
    state => state.selectedGameModeKanji
  );
  const selectedKanjiObjs = useKanjiStore(state => state.selectedKanjiObjs);

  const selectedGameModeVocab = useVocabStore(
    state => state.selectedGameModeVocab
  );

  const selectedGameMode =
    currentDojo === 'kana'
      ? selectedGameModeKana
      : currentDojo === 'kanji'
      ? selectedGameModeKanji
      : currentDojo === 'vocabulary'
      ? selectedGameModeVocab
      : '';

  const selectedWordObjs = useVocabStore(state => state.selectedVocabObjs);

  const isFilled =
    currentDojo === 'kana'
      ? kanaGroupIndices.length !== 0
      : currentDojo === 'kanji'
      ? selectedKanjiObjs.length >= 10
      : currentDojo === 'vocabulary'
      ? selectedWordObjs.length >= 10
      : false;

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!hotkeysOn) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        buttonRef.current?.click();
      } else if (event.code === 'Space' || event.key === ' ') {
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hotkeysOn]);

  const showTimedChallenge =
    currentDojo === 'kana' ||
    currentDojo === 'vocabulary' ||
    currentDojo === 'kanji';

  const [layout, setLayout] = useState<{
    bottom: number;
    left: number | string;
    width: number | string;
  }>({
    bottom: 0,
    left: 0,
    width: '100%'
  });

  const placeholderRef = useRef<HTMLDivElement | null>(null);

  // Safe useLayoutEffect for SSR
  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const updateLayout = () => {
      const sidebar = document.getElementById('main-sidebar');
      const bottomBar = document.getElementById('main-bottom-bar');
      const placeholder = placeholderRef.current;
      const parent = placeholder?.parentElement;
      const width = window.innerWidth;

      let bottom = 0;
      let left: number | string = 0;
      let barWidth: number | string = '100%';

      // 1. Calculate Bottom Offset
      if (width < 1024) {
        // Mobile: Sidebar is at bottom
        if (sidebar) {
          bottom = sidebar.offsetHeight;
        }
      } else {
        // Desktop: BottomBar is at bottom
        if (bottomBar) {
          bottom = bottomBar.offsetHeight;
        }
      }

      // 2. Calculate Horizontal Layout
      if (width >= 1024 && parent) {
        // Desktop: Match parent width/position exactly
        const rect = parent.getBoundingClientRect();
        left = rect.left;
        barWidth = rect.width;
      } else {
        // Mobile: Full width
        left = 0;
        barWidth = '100%';
      }

      setLayout({ bottom, left, width: barWidth });
    };

    // Initial update
    updateLayout();

    // Setup ResizeObserver on parent to catch flex layout changes
    let observer: ResizeObserver | null = null;
    const parent = placeholderRef.current?.parentElement;

    if (parent) {
      observer = new ResizeObserver(() => {
        updateLayout();
      });
      observer.observe(parent);
    }

    // Also listen to window resize for global changes (like breakpoints)
    window.addEventListener('resize', updateLayout);

    return () => {
      window.removeEventListener('resize', updateLayout);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      {/* Invisible placeholder to measure parent width/position */}
      <div
        ref={placeholderRef}
        className='w-full h-0 opacity-0 pointer-events-none'
      />

      <AnimatePresence>
        {isFilled && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              bottom: `${layout.bottom}px`,
              left:
                typeof layout.left === 'number'
                  ? `${layout.left}px`
                  : layout.left,
              width:
                typeof layout.width === 'number'
                  ? `${layout.width}px`
                  : layout.width
            }}
            className={clsx(
              'fixed z-40',
              'bg-[var(--background-color)]',
              'border-t border-[var(--border-color)]'
            )}
          >
            <div
              className={clsx(
                'flex flex-row items-center justify-center',
                'w-full max-w-4xl mx-auto',
                'h-16 px-4 gap-4'
              )}
            >
              {/* Timed Challenge Button */}
              {showTimedChallenge && (
                <Link
                  href={`${currentDojo}/timed-challenge`}
                  className='flex-1 max-w-[200px] h-10'
                >
                  <button
                    className={clsx(
                      'w-full h-full px-4 flex flex-row justify-center items-center gap-2',
                      'text-[var(--secondary-color)]',
                      'hover:text-[var(--main-color)] hover:bg-[var(--card-color)]',
                      'rounded-lg transition-all duration-200',
                      'font-medium text-sm'
                    )}
                    onClick={() => playClick()}
                  >
                    <Timer size={18} />
                    <span className='whitespace-nowrap'>Timed Challenge</span>
                  </button>
                </Link>
              )}

              {/* Divider */}
              {showTimedChallenge && (
                <div className='h-6 w-[1px] bg-[var(--border-color)]' />
              )}

              {/* Go Button */}
              <Link
                href={`/${currentDojo}/train`}
                className='flex-1 max-w-[200px] h-10'
              >
                <button
                  disabled={!selectedGameMode || !isFilled}
                  ref={buttonRef}
                  className={clsx(
                    'w-full h-full px-6 flex flex-row justify-center items-center gap-2',
                    'rounded-lg transition-all duration-200',
                    selectedGameMode && isFilled
                      ? 'bg-[var(--main-color)] text-white shadow-md shadow-[var(--main-color)]/20 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]'
                      : 'text-[var(--border-color)] cursor-not-allowed'
                  )}
                  onClick={e => {
                    e.currentTarget.blur();
                    playClick();
                  }}
                >
                  <span className='font-bold text-base'>Start</span>
                  <Play
                    className={clsx(
                      selectedGameMode && isFilled && 'fill-current'
                    )}
                    size={18}
                  />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopBar;
