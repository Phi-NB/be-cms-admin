// import { GetListDeckBodyDto } from "src/modules/deck/dto/pagination.dto";

// export const filterDeckVersion = ({ filter }: GetListDeckBodyDto) => {
//   let queryFilter = {};
//   if (filter && filter.length > 0) {
//     filter.forEach((item) => {
//       switch (item.key) {
//         case FILTER_KEY.STATUS:
//           queryFilter = {
//             ...queryFilter,
//             status: { $in: item.option },
//           };
//           break;
//         default:
//           break;
//       }
//     });
//   }
//   return queryFilter;
// };
