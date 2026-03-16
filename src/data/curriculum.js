export const STUDENTS = [
  'Gregory Dugas',
  'George Johnson',
  'Emmeline Dye',
  'Henry Quattrone',
  'Lachlan Richard',
  'Louis Rorex',
  'Samuel Faul',
  'Sawyer Rybacki',
  'Axel Taylor',
];

export const STATUS_OPTIONS = [
  { code: 'P',  label: 'Presented',  color: '#854F0B', bg: '#FAEEDA' },
  { code: 'Pr', label: 'Practicing', color: '#0F6E56', bg: '#E1F5EE' },
  { code: 'M',  label: 'Mastered',   color: '#3B6D11', bg: '#EAF3DE' },
];

export const SECTIONS = {
  'ELA Standards': {
    icon: '📖',
    groups: {
      'Foundational Skills': [
        { id: 'S007', name: 'Track print left→right, top→bottom, page to page' },
        { id: 'S010', name: 'Recognize and produce rhyming words' },
      ],
      'Language Standards': [
        { id: 'S026', name: 'Capitalize first word of sentence and pronoun I' },
        { id: 'S027', name: 'Recognize and name ending punctuation (? ! .)' },
        { id: 'S029', name: 'Relate words to their opposites' },
      ],
    },
  },
  'Montessori Language': {
    icon: '🔤',
    groups: {
      'Language Lessons': [
        { id: 'S178', name: 'Sensorial Materials' },
        { id: 'S179', name: 'Practical Life' },
        { id: 'S180', name: 'Art & Music' },
        { id: 'S181', name: 'Colors' },
        { id: 'S182', name: 'Shapes' },
        { id: 'S183', name: 'Patterns' },
        { id: 'S184', name: 'Sequencing' },
        { id: 'S185', name: 'Matching' },
        { id: 'S186', name: 'Listening to Stories' },
        { id: 'S187', name: 'Spoken Vocabulary' },
        { id: 'S188', name: 'Lowercase Letter Symbol to Sound' },
        { id: 'S189', name: 'Lowercase Letter Writing' },
        { id: 'S190', name: 'Writes Full Name' },
        { id: 'S191', name: 'Listens to 20-min story or lesson' },
        { id: 'S192', name: 'Lowercase Letter Sounds' },
        { id: 'S193', name: 'Phonetic Reading' },
        { id: 'S194', name: 'Phonetic Spelling' },
        { id: 'S195', name: 'Sight Words' },
        { id: 'S196', name: 'Verbally Tell a Story' },
        { id: 'S197', name: 'Draw a Picture About It' },
        { id: 'S198', name: 'Word Writing' },
        { id: 'S199', name: 'Uppercase Letter Writing with Rules' },
        { id: 'S200', name: 'Fluent Reading' },
        { id: 'S201', name: 'Grammar: Noun, Verb, Article, Adjective' },
        { id: 'S202', name: 'Comprehension of Stories Read and Heard' },
        { id: 'S203', name: 'Writing Sentences About Stories' },
        { id: 'S204', name: 'Parts of a Sentence' },
        { id: 'S205', name: 'Alphabetizing by First Letter' },
        { id: 'S206', name: 'Opposites' },
        { id: 'S207', name: 'Rhyming' },
        { id: 'S208', name: 'Plural and Singular' },
      ],
    },
  },
  'Letters': {
    icon: '🔡',
    groups: {
      'Lowercase': 'abcdefghijklmnopqrstuvwxyz'.split('').map((l, i) => ({
        id: `LC${String(i + 1).padStart(2, '0')}`, name: l,
      })),
      'Uppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((l, i) => ({
        id: `UC${String(i + 1).padStart(2, '0')}`, name: l,
      })),
      'Sounds': ['/a/','/b/','/c/','/d/','/e/','/f/','/g/','/h/','/i/','/j/','/k/','/l/','/m/','/n/','/o/','/p/','/qu/','/r/','/s/','/t/','/u/','/v/','/w/','/x/','/y/','/z/'].map((l, i) => ({
        id: `SO${String(i + 1).padStart(2, '0')}`, name: l,
      })),
    },
  },
  'Phonograms': {
    icon: '🔊',
    groups: {
      'Phonograms': [
        { id: 'P01', name: 'sh (ship, cash)' }, { id: 'P02', name: 'ch (chip, chin)' },
        { id: 'P03', name: 'th (thin, moth)' }, { id: 'P04', name: 'ee (feet, tree)' },
        { id: 'P05', name: 'oo (book, moon)' }, { id: 'P06', name: 'ou (cloud, shout)' },
        { id: 'P07', name: 'qu (quit)' },        { id: 'P08', name: 'or (fork, born)' },
        { id: 'P09', name: 'ai (mail, wait)' },  { id: 'P10', name: 'oa (boat, soap)' },
        { id: 'P11', name: 'or (fork)' },         { id: 'P12', name: 'ar (car)' },
        { id: 'P13', name: 'ie (pie, tie)' },     { id: 'P14', name: 'oy (boy, toy)' },
        { id: 'P15', name: 'ar (car, hard)' },    { id: 'P16', name: 'au (haul, haunt)' },
        { id: 'P17', name: 'ue (blue, clue)' },   { id: 'P18', name: 'er (her, fern)' },
      ],
    },
  },
  'High Frequency Words': {
    icon: '💬',
    groups: {
      'Sight Words': [
        { id: 'S114', name: 'I' },    { id: 'S115', name: 'can' },  { id: 'S116', name: 'see' },
        { id: 'S117', name: 'we' },   { id: 'S118', name: 'like' }, { id: 'S119', name: 'a' },
        { id: 'S120', name: 'the' },  { id: 'S121', name: 'am' },   { id: 'S122', name: 'in' },
        { id: 'S123', name: 'go' },   { id: 'S124', name: 'my' },   { id: 'S125', name: 'went' },
        { id: 'S126', name: 'me' },   { id: 'S127', name: 'to' },   { id: 'S128', name: 'you' },
        { id: 'S129', name: 'have' }, { id: 'S130', name: 'look' }, { id: 'S131', name: 'was' },
        { id: 'S132', name: 'said' }, { id: 'S133', name: 'here' }, { id: 'S134', name: 'she' },
        { id: 'S135', name: 'he' },   { id: 'S136', name: 'big' },  { id: 'S137', name: 'where' },
        { id: 'S138', name: 'jump' }, { id: 'S139', name: 'come' }, { id: 'S140', name: 'with' },
        { id: 'S141', name: 'run' },  { id: 'S142', name: 'play' }, { id: 'S143', name: 'help' },
        { id: 'S144', name: 'up' },   { id: 'S145', name: 'down' }, { id: 'S146', name: 'not' },
        { id: 'S147', name: 'make' },
      ],
    },
  },
  'Numerals': {
    icon: '🔢',
    groups: {
      'Recognizes Numerals': Array.from({ length: 21 }, (_, i) => ({
        id: `S${149 + i}`, name: String(i),
      })),
    },
  },
  'Math Standards': {
    icon: '➕',
    groups: {
      'Counting & Cardinality': [
        { id: 'S043', name: 'Write numbers 0–20' },
        { id: 'S044', name: 'Count groups of up to 20 objects accurately' },
        { id: 'S045', name: 'Compare numbers 1–10 (less/greater/equal)' },
      ],
      'Operations & Algebraic Thinking': [
        { id: 'S050', name: 'Make 10 from a number 1–9' },
        { id: 'S051', name: 'Fluently add within 5' },
        { id: 'S052', name: 'Fluently subtract within 5' },
        { id: 'S053', name: 'Compose/decompose numbers 11–19 into tens and ones' },
      ],
      'Measurement & Data': [
        { id: 'S054', name: 'Describe attributes of objects (length, weight)' },
        { id: 'S055', name: 'Compare objects by attribute (heavier, taller, etc.)' },
      ],
      'Geometry': [
        { id: 'S060', name: 'Identify 2D shapes: rectangle, triangle, square, circle, hexagon' },
        { id: 'S061', name: 'Identify 3D shapes: cube, cone, cylinder, sphere' },
      ],
    },
  },
  'Montessori Math': {
    icon: '🧮',
    groups: {
      'Math Lessons': [
        { id: 'S209', name: 'Linear Counting (1–10)' }, { id: 'S210', name: 'Teen Numbers' },
        { id: 'S211', name: 'Basic Quantity' },          { id: 'S212', name: 'Odd and Even' },
        { id: 'S213', name: '100 Board' },               { id: 'S214', name: 'Teens Board' },
        { id: 'S215', name: 'Tens Board' },              { id: 'S216', name: 'Number Roll' },
        { id: 'S217', name: 'Place Value' },             { id: 'S218', name: '45 Layout' },
        { id: 'S219', name: 'Golden Beads – Fetch, Carry, Say' },
        { id: 'S220', name: 'Golden Bead Addition' },
        { id: 'S221', name: 'Golden Bead Multiplication' },
        { id: 'S222', name: 'US Coins' },                { id: 'S223', name: 'Time' },
        { id: 'S224', name: 'Picture Graphs' },          { id: 'S225', name: 'Numeral Writing' },
        { id: 'S226', name: 'Speed Math (+ -)' },        { id: 'S227', name: '< and >' },
        { id: 'S228', name: 'Snake Game (Make 10)' },    { id: 'S229', name: 'Dynamic Addition' },
        { id: 'S230', name: 'Dynamic Subtraction' },
        { id: 'S231', name: 'Skip Counting (2, 5, 10)' },
        { id: 'S232', name: 'Simple Multiplication' },   { id: 'S233', name: 'Simple Division' },
        { id: 'S234', name: 'Measurement' },             { id: 'S235', name: 'Beginning Fractions' },
        { id: 'S236', name: 'Graphing' },
      ],
    },
  },
  'Science': {
    icon: '🔬',
    groups: {
      'Science': [{ id: 'S036', name: 'Identify characteristics of living organisms' }],
    },
  },
};

export function getAllSkills() {
  const list = [];
  for (const sec of Object.values(SECTIONS)) {
    for (const skills of Object.values(sec.groups)) {
      for (const sk of skills) list.push(sk);
    }
  }
  return list;
}

export function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}
