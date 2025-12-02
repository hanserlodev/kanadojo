'use client';
import clsx from 'clsx';
import useKanjiStore from '@/features/Kanji/store/useKanjiStore';
import useVocabStore from '@/features/Vocabulary/store/useVocabStore';
import { usePathname } from 'next/navigation';
import { removeLocaleFromPath } from '@/shared/lib/pathUtils';
import {
  N5KanjiLength,
  N4KanjiLength,
  N3KanjiLength,
  N2KanjiLength,
  N1KanjiLength,
  N5VocabLength,
  N4VocabLength,
  N3VocabLength,
  N2VocabLength,
  N1VocabLength
} from '@/shared/lib/unitSets';
import { useClick } from '@/shared/hooks/useAudio';
import { useButtonBorderColor } from '@/shared/hooks/useButtonBorderColor';
import { CircleCheck, Trash } from 'lucide-react';
import { useMemo } from 'react';

type CollectionLevel = 'n5' | 'n4' | 'n3' | 'n2' | 'n1';
type ContentType = 'kanji' | 'vocabulary';

// Calculate number of sets (10 items per set)
const calculateSets = (length: number) => Math.ceil(length / 10);

const KANJI_SETS = {
  n5: calculateSets(N5KanjiLength),
  n4: calculateSets(N4KanjiLength),
  n3: calculateSets(N3KanjiLength),
  n2: calculateSets(N2KanjiLength),
  n1: calculateSets(N1KanjiLength)
};

const VOCAB_SETS = {
  n5: calculateSets(N5VocabLength),
  n4: calculateSets(N4VocabLength),
  n3: calculateSets(N3VocabLength),
  n2: calculateSets(N2VocabLength),
  n1: calculateSets(N1VocabLength)
};

const CollectionSelector = () => {
  const { playClick } = useClick();
  const pathname = usePathname();
  const contentType = removeLocaleFromPath(pathname).slice(1) as ContentType;
  const secondaryBorderColor = useButtonBorderColor('--secondary-color');

  const isKanji = contentType === 'kanji';
  const isVocab = contentType === 'vocabulary';

  // Kanji store
  const {
    selectedKanjiCollection,
    setSelectedKanjiCollection,
    selectedKanjiSets,
    clearKanjiObjs,
    clearKanjiSets
  } = useKanjiStore();

  // Vocab store
  const {
    selectedVocabCollection,
    setSelectedVocabCollection,
    selectedVocabSets,
    clearVocabObjs,
    clearVocabSets
  } = useVocabStore();

  // Current content type values
  const selectedCollection = isKanji
    ? selectedKanjiCollection
    : selectedVocabCollection;
  const setSelectedCollection = isKanji
    ? setSelectedKanjiCollection
    : setSelectedVocabCollection;
  const selectedSets = isKanji ? selectedKanjiSets : selectedVocabSets;
  const sets = isKanji ? KANJI_SETS : VOCAB_SETS;

  const handleClear = () => {
    playClick();
    if (isKanji) {
      clearKanjiSets();
      clearKanjiObjs();
    } else {
      clearVocabSets();
      clearVocabObjs();
    }
  };

  const handleCollectionSelect = (level: CollectionLevel) => {
    playClick();
    setSelectedCollection(level);
    if (isKanji) {
      clearKanjiObjs();
      clearKanjiSets();
    } else {
      clearVocabObjs();
      clearVocabSets();
    }
  };

  // Generate collection data with cumulative set ranges
  const collections = useMemo(() => {
    const levels: CollectionLevel[] = ['n5', 'n4', 'n3', 'n2', 'n1'];
    let cumulativeSets = 0;

    return levels.map((level, index) => {
      const setCount = sets[level];
      const startSet = cumulativeSets + 1;
      const endSet = cumulativeSets + setCount;
      cumulativeSets = endSet;

      return {
        name: level,
        displayName: `Unit ${index + 1}`,
        subtitle: `Levels ${startSet}-${endSet}`,
        jlpt: level.toUpperCase()
      };
    });
  }, [sets]);

  return (
    <div className='flex flex-col'>
      {/* Modern Toggle-Style Unit Selector */}
      <div className='flex rounded-tl-2xl rounded-tr-2xl bg-[var(--card-color)] border-b-1 border-[var(--border-color)] p-1.5 gap-1.5 flex-col md:flex-row'>
        {collections.map(collection => {
          const isSelected = collection.name === selectedCollection;

          return (
            <button
              key={collection.name}
              onClick={() => handleCollectionSelect(collection.name)}
              className={clsx(
                'relative flex-1 px-4 py-3 rounded-lg transition-colors duration-0',
                'flex flex-col items-center justify-center gap-1',
                isSelected
                  ? 'bg-[var(--main-color)] text-[var(--background-color)] shadow-sm'
                  : 'text-[var(--main-color)]  hover:bg-[var(--border-color)]/50'
              )}
            >
              <div className='flex items-center gap-2'>
                <span className='text-xl '>{collection.displayName}</span>
                <span
                  className={clsx(
                    'text-xs  px-1.5 py-0.5 rounded',
                    isSelected
                      ? 'bg-[var(--border-color)] text-[var(--secondary-color)]'
                      : 'bg-[var(--border-color)] text-[var(--secondary-color)]'
                  )}
                >
                  {collection.jlpt}
                </span>
              </div>
              <span
                className={clsx(
                  'text-xs',
                  isSelected
                    ? 'text-[var(--background-color)]/80'
                    : 'text-[var(--secondary-color)]/80'
                )}
              >
                {collection.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Sets Info & Clear Button */}
      <div
        className={clsx(
          'rounded-bl-2xl rounded-br-2xl bg-[var(--card-color)] p-4',
          'w-full text-lg flex flex-col gap-2 items-start'
        )}
      >
        <div className='flex flex-col'>
          <span className='flex gap-2 items-center'>
            <CircleCheck className='text-[var(--secondary-color)]' />
            Selected Levels:
          </span>
          <span className='text-[var(--secondary-color)]'>
            {selectedSets.length > 0
              ? selectedSets.sort().join(', ').replace(/Set /g, 'Level ')
              : 'None'}
          </span>
        </div>

        <button
          className={clsx(
            'py-3 px-16 w-full',
            'rounded-xl duration-275 hover:cursor-pointer bg-[var(--secondary-color)] border-b-8 text-[var(--background-color)]',
            'flex justify-center'
          )}
          style={{ borderColor: secondaryBorderColor || undefined }}
          onClick={handleClear}
          aria-label='Clear selected levels'
        >
          <Trash size={32} />
        </button>
      </div>
    </div>
  );
};

export default CollectionSelector;
