/**
 * React Select Form Alpha
 */

'use client';

import Select from "react-select";

// Context
import { useReactSelectAlpha } from "@/context/ReactSelectAlphaContext";

const dataAlpha = [
  {
    name: 'Amber',
    vision: 'Pyro',
    weapon: 'Bow',
    nation: 'Mondstadt',
    rarity: 4,
    talent: [
      { name: 'Sharpshooter', type: 'Normal Attack' },
      { name: 'Explosive Puppet', type: 'Elemental Skill' },
      { name: 'Fiery Rain', type: 'Elemental Burst' },
      { name: 'Every Arrow Finds Its Target', type: '1st Ascension Passive' },
      { name: 'Precise Shot', type: '4th Ascension Passive' },
      { name: 'Gliding Champion', type: 'Utility Passive' },
    ],
    constellation: [
      { name: "One Arrow to Rule Them All", level: 1 },
      { name: "Bunny Triggered", level: 2 },
      { name: "It Burns!", level: 3 },
      { name: "It's Not Just Any Doll...", level: 4 },
      { name: "It's Baron Bunny!", level: 5 },
      { name: "Wildfire", level: 6 },
    ],
  },
  {
    name: 'Kaeya',
    vision: 'Cryo',
    weapon: 'Sword',
    nation: 'Mondstadt',
    rarity: 4,
    talent: [
      { name: 'Ceremonial Bladework', type: 'Normal Attack' },
      { name: 'Frostgnaw', type: 'Elemental Skill' },
      { name: 'Glacial Waltz', type: 'Elemental Burst' },
      { name: 'Cold-Blooded Strike', type: '1st Ascension Passive' },
      { name: 'Glacial Heart', type: '4th Ascension Passive' },
      { name: 'Hidden Strength', type: 'Utility Passive' },
    ],
    constellation: [
      { name: "Excellent Blood", level: 1 },
      { name: "Never-Ending Performance", level: 2 },
      { name: "Dance of Frost", level: 3 },
      { name: "Frozen Kiss", level: 4 },
      { name: "Frostbiting Embrace", level: 5 },
      { name: "Glacial Whirlwind", level: 6 },
    ],
  },
  {
    name: 'Lisa',
    vision: 'Electro',
    weapon: 'Catalyst',
    nation: 'Mondstadt',
    rarity: 4,
    talent: [
      { name: 'Lightning Touch', type: 'Normal Attack' },
      { name: 'Violet Arc', type: 'Elemental Skill' },
      { name: 'Lightning Rose', type: 'Elemental Burst' },
      { name: 'Induced Aftershock', type: '1st Ascension Passive' },
      { name: 'Static Electricity Field', type: '4th Ascension Passive' },
      { name: 'General Pharmaceutics', type: 'Utility Passive' },
    ],
    constellation: [
      { name: "Infinite Circuit", level: 1 },
      { name: "Electromagnetic Field", level: 2 },
      { name: "Resonant Thunder", level: 3 },
      { name: "Plasma Eruption", level: 4 },
      { name: "Electrocute", level: 5 },
      { name: "Pulsating Witch", level: 6 },
    ],
  },
];

export default function ReactSelectFormAlpha() {
  // Context
  const { setCharacter } = useReactSelectAlpha();

  const characterOption = dataAlpha.map(
    (record: {
      name: string;
      vision: string;
      weapon: string;
      nation: string;
      rarity: number;
    }) => {
      return {
        value: record.name.toLowerCase(),
        label: record.name,
        name: record.name,
        vision: record.vision,
        weapon: record.weapon,
        nation: record.nation,
        rarity: record.rarity,
      };
    });

  const handleCharacterChange = (selectedOption: any) => {
    if (selectedOption) {
      console.debug('Selected Character:', selectedOption);
      setCharacter(selectedOption);
    }
  }

  return (
    <div className='mx-auto' style={{ width: '500px' }}>
      <Select
        name='character'
        placeholder='Select Character...'
        options={characterOption}
        onChange={handleCharacterChange}
      />
    </div>
  );
};
