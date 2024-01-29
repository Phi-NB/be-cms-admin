export enum DB_COLLECTION {
  CONFIG = 'configs',
  ITEM = 'items',
  QUEST = 'quests',
  SHOP = 'shop',
}

export const DB_KEYMAP_COMMON = {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
};

export const DB_KEYMAP = {
  CONFIG: {
    name: '',
    ...DB_KEYMAP_COMMON,
  },
};
