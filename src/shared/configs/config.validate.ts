import { CONSTANT_CONFIG } from '../../constants/config';
import { z } from 'zod';

export const validateUpdateConfig = z
  .object({
    key: z.nativeEnum(CONSTANT_CONFIG),
    value: z.union([
      z.object({
        data: z.union([
          z.object({
            rate: z.array(z.number()),
            gold: z.array(z.number()),
            type: z.array(z.number()),
            id: z.array(z.number()),
            quantity: z.array(z.number()),
            limit: z.array(z.number()),
            level: z.array(z.number()),
            goldBag: z.array(z.number()),
            skin1: z.array(z.number()),
            skin2: z.array(z.number()),
            skin3: z.array(z.number()),
          }),
          z.array(
            z.object({
              level: z.number(),
              exp: z.number(),
            }),
          ),
        ]),
        maxLevel: z.number(),
      }),
      z.number(),
    ]),
  })
  .refine(
    (data) => {
      if (data.key === CONSTANT_CONFIG.NORMAL_RATE) {
        if (
          typeof data.value !== 'number' &&
          'rate' in data.value.data &&
          'gold' in data.value.data &&
          Array.isArray(data.value.data.rate) &&
          Array.isArray(data.value.data.gold)
        ) {
          return data.value.data.rate.length === data.value.data.gold.length;
        }
        return false;
      }
      return true;
    },
    {
      message: 'Khi key là NORMAL_RATE, data phải là object và mảng rate và gold phải có độ dài bằng nhau.',
    },
  );
