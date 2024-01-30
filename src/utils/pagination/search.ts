// export const searchDeck = ({ search }: GetListDeckBodyDto) => {
//   let querySearch = {};
//   if (search) {
//     querySearch = {
//       ...dataCheck(search.title, {
//         name: { $regex: search.title.toLowerCase(), $options: 'i' },
//       }),
//     };
//   }
//   return querySearch;
// };

// export const searchCard = ({ search }: GetListCardBodyDto) => {
//   let querySearch = {};
//   if (search) {
//     querySearch = {
//       ...dataCheck(search.title, {
//         name: { $regex: search.title.toLowerCase(), $options: 'i' },
//       }),
//     };
//   }
//   return querySearch;
// };

// export const searchUser = ({ search }: GetListUserBodyDto) => {
//   let querySearch = {};
//   if (search) {
//     querySearch = {
//       ...dataCheck(search.title, {
//         name: { $regex: search.title.toLowerCase(), $options: 'i' },
//       }),
//     };
//   }
//   return querySearch;
// };
