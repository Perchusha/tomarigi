export type IPokemonClass = 'POKEMON_CLASS_LEGENDARY' | 'POKEMON_CLASS_MYTHIC' | 'POKEMON_CLASS_ULTRA_BEAST' | null;

export interface IQuickMoveProperty {
  id: string;
  power: number;
  energy: number;
  durationMs: number;
  type: {
    type: string;
    names: {
      English: string;
      German: string;
      French: string;
      Italian: string;
      Japanese: string;
      Korean: string;
      Spanish: string;
    };
  };
  names: {
    English: string;
    German: string;
    French: string;
    Italian: string;
    Japanese: string;
    Korean: string;
    Spanish: string;
  };
  combat: {
    energy: number;
    power: number;
    turns: number;
    buffs: {
      activationChance: number;
      attackerAttackStatsChange: number;
      attackerDefenseStatsChange: number;
      targetAttackStatsChange: number;
      targetDefenseStatsChange: number;
    };
  };
}

export interface IPokemon {
  id: string;
  formId: string;
  dexNr: 1;
  generation: number;
  names: {
    English: string;
    German: string;
    French: string;
    Italian: string;
    Japanese: string;
    Korean: string;
    Spanish: string;
  };
  stats: {
    stamina: number;
    attack: number;
    defense: number;
  };
  primaryType: {
    type: string;
    names: {
      English: string;
      German: string;
      French: string;
      Italian: string;
      Japanese: string;
      Korean: string;
      Spanish: string;
    };
  };
  secondaryType: {
    type: string;
    names: {
      English: string;
      German: string;
      French: string;
      Italian: string;
      Japanese: string;
      Korean: string;
      Spanish: string;
    };
  };
  pokemonClass: IPokemonClass;
  quickMoves: {
    property1: IQuickMoveProperty;
    property2: IQuickMoveProperty;
  };
  cinematicMoves: {
    property1: {
      id: string;
      power: number;
      energy: number;
      durationMs: number;
      type: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      names: {
        English: string;
        German: string;
        French: string;
        Italian: string;
        Japanese: string;
        Korean: string;
        Spanish: string;
      };
      combat: {
        energy: number;
        power: number;
        turns: number;
        buffs: {
          activationChance: number;
          attackerAttackStatsChange: number;
          attackerDefenseStatsChange: number;
          targetAttackStatsChange: number;
          targetDefenseStatsChange: number;
        };
      };
    };
    property2: {
      id: string;
      power: number;
      energy: number;
      durationMs: number;
      type: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      names: {
        English: string;
        German: string;
        French: string;
        Italian: string;
        Japanese: string;
        Korean: string;
        Spanish: string;
      };
      combat: {
        energy: number;
        power: number;
        turns: number;
        buffs: {
          activationChance: number;
          attackerAttackStatsChange: number;
          attackerDefenseStatsChange: number;
          targetAttackStatsChange: number;
          targetDefenseStatsChange: number;
        };
      };
    };
  };
  eliteQuickMoves: {
    property1: {
      id: string;
      power: number;
      energy: number;
      durationMs: number;
      type: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      names: {
        English: string;
        German: string;
        French: string;
        Italian: string;
        Japanese: string;
        Korean: string;
        Spanish: string;
      };
      combat: {
        energy: number;
        power: number;
        turns: number;
        buffs: {
          activationChance: number;
          attackerAttackStatsChange: number;
          attackerDefenseStatsChange: number;
          targetAttackStatsChange: number;
          targetDefenseStatsChange: number;
        };
      };
    };
    property2: {
      id: string;
      power: number;
      energy: number;
      durationMs: number;
      type: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      names: {
        English: string;
        German: string;
        French: string;
        Italian: string;
        Japanese: string;
        Korean: string;
        Spanish: string;
      };
      combat: {
        energy: number;
        power: number;
        turns: number;
        buffs: {
          activationChance: number;
          attackerAttackStatsChange: number;
          attackerDefenseStatsChange: number;
          targetAttackStatsChange: number;
          targetDefenseStatsChange: number;
        };
      };
    };
  };
  eliteCinematicMoves: {
    property1: {
      id: string;
      power: number;
      energy: number;
      durationMs: number;
      type: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      names: {
        English: string;
        German: string;
        French: string;
        Italian: string;
        Japanese: string;
        Korean: string;
        Spanish: string;
      };
      combat: {
        energy: number;
        power: number;
        turns: number;
        buffs: {
          activationChance: number;
          attackerAttackStatsChange: number;
          attackerDefenseStatsChange: number;
          targetAttackStatsChange: number;
          targetDefenseStatsChange: number;
        };
      };
    };
    property2: {
      id: string;
      power: number;
      energy: number;
      durationMs: number;
      type: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      names: {
        English: string;
        German: string;
        French: string;
        Italian: string;
        Japanese: string;
        Korean: string;
        Spanish: string;
      };
      combat: {
        energy: number;
        power: number;
        turns: number;
        buffs: {
          activationChance: number;
          attackerAttackStatsChange: number;
          attackerDefenseStatsChange: number;
          targetAttackStatsChange: number;
          targetDefenseStatsChange: number;
        };
      };
    };
  };
  assets: {
    image: string;
    shinyImage: string;
  };
  assetForms: [
    {
      image: string;
      shinyImage: string;
      form: string;
      costume: string;
      isFemale: true;
    }
  ];
  regionForms: {
    property1: {
      id: string;
      formId: string;
      dexNr: number;
      generation: number;
      names: {
        English: string;
        German: string;
        French: string;
        Italian: string;
        Japanese: string;
        Korean: string;
        Spanish: string;
      };
      stats: {
        stamina: number;
        attack: number;
        defense: number;
      };
      primaryType: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      secondaryType: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      pokemonClass: IPokemonClass;
      quickMoves: {
        property1: IQuickMoveProperty;
        property2: IQuickMoveProperty;
      };
      cinematicMoves: {
        property1: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
        property2: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
      };
      eliteQuickMoves: {
        property1: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
        property2: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
      };
      eliteCinematicMoves: {
        property1: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
        property2: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
      };
      assets: {
        image: string;
        shinyImage: string;
      };
      regionForms: {
        property1: {};
        property2: {};
      };
      evolutions: [
        {
          id: string;
          formId: string;
          candies: number;
          item: {
            id: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          quests: [
            {
              id: string;
              type: string;
              names: {
                English: string;
                German: string;
                French: string;
                Italian: string;
                Japanese: string;
                Korean: string;
                Spanish: string;
              };
            }
          ];
        }
      ];
      hasMegaEvolution: true;
      megaEvolutions: {
        property1: {
          id: string;
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          stats: {
            stamina: number;
            attack: number;
            defense: number;
          };
          primaryType: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          secondaryType: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          assets: {
            image: string;
            shinyImage: string;
          };
        };
        property2: {
          id: string;
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          stats: {
            stamina: number;
            attack: number;
            defense: number;
          };
          primaryType: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          secondaryType: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          assets: {
            image: string;
            shinyImage: string;
          };
        };
      };
    };
    property2: {
      id: string;
      formId: string;
      dexNr: number;
      generation: number;
      names: {
        English: string;
        German: string;
        French: string;
        Italian: string;
        Japanese: string;
        Korean: string;
        Spanish: string;
      };
      stats: {
        stamina: number;
        attack: number;
        defense: number;
      };
      primaryType: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      secondaryType: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      pokemonClass: IPokemonClass;
      quickMoves: {
        property1: IQuickMoveProperty;
        property2: IQuickMoveProperty;
      };
      cinematicMoves: {
        property1: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
        property2: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
      };
      eliteQuickMoves: {
        property1: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
        property2: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
      };
      eliteCinematicMoves: {
        property1: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
        property2: {
          id: string;
          power: number;
          energy: number;
          durationMs: number;
          type: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          combat: {
            energy: number;
            power: number;
            turns: number;
            buffs: {
              activationChance: number;
              attackerAttackStatsChange: number;
              attackerDefenseStatsChange: number;
              targetAttackStatsChange: number;
              targetDefenseStatsChange: number;
            };
          };
        };
      };
      assets: {
        image: string;
        shinyImage: string;
      };
      regionForms: {
        property1: {};
        property2: {};
      };
      evolutions: [
        {
          id: string;
          formId: string;
          candies: number;
          item: {
            id: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          quests: [
            {
              id: string;
              type: string;
              names: {
                English: string;
                German: string;
                French: string;
                Italian: string;
                Japanese: string;
                Korean: string;
                Spanish: string;
              };
            }
          ];
        }
      ];
      hasMegaEvolution: true;
      megaEvolutions: {
        property1: {
          id: string;
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          stats: {
            stamina: number;
            attack: number;
            defense: number;
          };
          primaryType: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          secondaryType: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          assets: {
            image: string;
            shinyImage: string;
          };
        };
        property2: {
          id: string;
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
          stats: {
            stamina: number;
            attack: number;
            defense: number;
          };
          primaryType: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          secondaryType: {
            type: string;
            names: {
              English: string;
              German: string;
              French: string;
              Italian: string;
              Japanese: string;
              Korean: string;
              Spanish: string;
            };
          };
          assets: {
            image: string;
            shinyImage: string;
          };
        };
      };
    };
  };
  evolutions: [
    {
      id: string;
      formId: string;
      candies: number;
      item: {
        id: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      quests: [
        {
          id: string;
          type: string;
          names: {
            English: string;
            German: string;
            French: string;
            Italian: string;
            Japanese: string;
            Korean: string;
            Spanish: string;
          };
        }
      ];
    }
  ];
  hasMegaEvolution: true;
  megaEvolutions: {
    property1: {
      id: string;
      names: {
        English: string;
        German: string;
        French: string;
        Italian: string;
        Japanese: string;
        Korean: string;
        Spanish: string;
      };
      stats: {
        stamina: number;
        attack: number;
        defense: number;
      };
      primaryType: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      secondaryType: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      assets: {
        image: string;
        shinyImage: string;
      };
    };
    property2: {
      id: string;
      names: {
        English: string;
        German: string;
        French: string;
        Italian: string;
        Japanese: string;
        Korean: string;
        Spanish: string;
      };
      stats: {
        stamina: number;
        attack: number;
        defense: number;
      };
      primaryType: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      secondaryType: {
        type: string;
        names: {
          English: string;
          German: string;
          French: string;
          Italian: string;
          Japanese: string;
          Korean: string;
          Spanish: string;
        };
      };
      assets: {
        image: string;
        shinyImage: string;
      };
    };
  };
}
